async function getCoordsForAddress(address) {
  // Pass the coordinates manually instead of using the Geocoding API
  const coordinates = {
    lat: 40.7484474,
    lng: -73.9871516
  };

  return coordinates;
}

module.exports = getCoordsForAddress;