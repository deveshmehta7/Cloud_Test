var jsonfile = require('jsonfile'),
    constants = require('../constants');

/**
 * Reads data from json file from specified filepath
 * @param filePath path of the file to be read
 * @param next callback
 */
exports.readFromJson = function (filePath, next) {
  jsonfile.readFile(filePath, function (err, data) {
    if (err) {
      console.log("readFromJson(): Error reading " + filePath + " " + err.toString());
      next(err, null);
    } else {
      next(null, data);
    }
  });
};

/**
 * Calculates the distance between 2 points
 * @param source has latitudes and longitudes of source
 * @param destination has latitudes and longitudes of destination
 */
exports.calculateDistance = function (source, destination) {
  var distance = constants.RadiusOfEarth * Math.acos((Math.sin(source.latitude) * Math.sin(destination.latitude)
      + Math.cos(source.latitude) * Math.cos(destination.latitude) * Math.cos(source.longitude - destination.longitude)));
  return distance;
};

/**
 * converts degree to radian
 * @param degree
 * @returns {*} return radian
 */
exports.convertDegreeToRadian = function (degree) {
  return degree * (constants.PI / 180)
};