const multer = require('multer');
const { v4: uuid } = require('uuid');

const MIMETYPES = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg',
};

const fileUpload = multer({
  limits: 500000,
  storage: multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, "Uploads/images");
    },
    filename: function (req, file, callback) {
      const ext = MIMETYPES[file.mimetype];
      callback(null, uuid() + "." + ext);
    },
  }),
  fileFilter: function (req, file, callback) {
    const isValid = !!MIMETYPES[file.mimetype];
    let error = isValid ? null : new Error("Invalid mime type!");
    callback(error, isValid);
  },
});

module.exports = fileUpload;