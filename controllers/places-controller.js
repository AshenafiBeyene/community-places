const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const Place = require("../models/place");
const User = require("../models/user");
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");

  
const getPlaceById = async (req, res, next) => {
  const placeId = req.params.pid;
  let place;
  try {
    place = await Place.findById(placeId);
  } catch (err) {
    const error = new HttpError("something went wrong", 500);
    return next(error);
  }

  if (!place) {
    const error = new HttpError(
      "Could not find a place for the provided id.",
      404
    );
    return next(error);
  }

  res.json({ place: place.toObject({ getters: true }) });
};

const getPlacesByUserId = async (req, res, next) => {
  const userId = req.params.uid;
  let userwithplaces;
  try {
    userwithplaces = await User.findById(userId).populate("places");
  } catch (err) {
    const error = new HttpError("fetch error", 500);
    console.log(error);
    return next(error);
  }
  
  // if(!places || places.places.length === 0)
  if (!userwithplaces|| userwithplaces.places.length === 0) {
    return next(
      new HttpError("Could not find places for the provided user id.", 404)
    );
  }

  res.json({
    places: userwithplaces.places.map((place) => place.toObject({ getters: true })),
  });
};

const createPlace = async (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );

  }
  // createdPlace
  const { title, description, address, location } = req.body;
  
  const createdPlace = new Place({  
    title,
    description,
    address,
    location: {
      lat: location.lat,
      lng: location.lng
    },
    image: req.file.path,
    creator: req.userData.userId
  });

  let user;
  try{
    user = await User.findById(req.userData.userId); 

}
  catch(err)
  {
    const error = new HttpError("creating place failed, please try again ", 500);
    console.log(err);
    return next(error);
    
  }

  if (!user) {
    const error = new HttpError("Could not find user for provided id.", 404);
    return next(error);
  }
  console.log(user);
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdPlace.save({ session: sess });
    user.places.push(createdPlace);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Creating place failed, please try again.",
      500
    );
    console.log(err);
    return next(error);
  }

  res.status(201).json({ place: createdPlace });
};

const updatePlace = async(req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("Invalid inputs passed, please check your data.", 422));
  }

  const { title, description } = req.body;
  const placeId = req.params.pid;
let place;
try
  {
    place = await Place.findById(placeId);
  } 
  catch (err)
  {
    const error = new HttpError(" can not find place", 500);
    console.log(err);
    return next(error);
  }
  if(place.creator.toString() !== req.userData.userId)
  {
    const error = new HttpError("you are not allowed to edit this place", 401);
    return next(error);
  }
  if (!place) {
    const error = new HttpError(
      "Could not find a place for the provided id.",
      404
    );
    return next(error);
  }             

  place.title = title;
  place.description = description;

  try{
    await place.save();
  }
  catch(err)
  {
    const error = new HttpError("can not update place", 500);
    return next(error);
  }

  res.status(200).json({ place: place.toObject({ getters: true }) });
};

const deletePlace = async (req, res, next) => {
  const placeId = req.params.pid;
  let place;
  try{
     place = await Place.findById(placeId).populate("creator");
  }
  catch(err)
  {
    const error = new HttpError("something went wrong can not delete place", 500);
    return next(error);
  }
  
  if(place.creator.id !== req.userData.userId)
  {
    const error = new HttpError("you are not allowed to delete this place", 401);
    return next(error);
  }
  if(!place)
  {
    const error = new HttpError("could not find place for this id", 404);
    return next(error);
  }
  const ImagePath = place.image;
  try{
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await place.deleteOne({ session: sess });
    place.creator.places.pull(place);
    await place.creator.save({ session: sess });
    await sess.commitTransaction();
  }
  catch(err)
  {
    console.log(err);
    const error = new HttpError("can not delete place", 500);
    console.log(err,"can not delete place");
    return next(error);
  }
 fs.unlink( ImagePath , (err) => {
   console.log(err);
 })

  res.status(200).json({ message: "Deleted place." });
};

exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
