/*jslint node: true, nomen: true, plusplus: true*/
"use strict";
var config = require('./config/config'),
    shortestPathFinder = require('./app/shortestPathFinder'),
    utils = require('./utils/utilityService');

/**
 * Gets the shortest path from the given input
 * @param next callback funtion
 */
exports.getShortestPath = function (next) {

  // reads the input file
  utils.readFromJson(config.inputFile, function (err, input) {
    // error callback handler
    if (err) {
      console.log('readFromJson(): Error reading from json file. ', err.toString());
      next(err, null);
    } else {
      next(null, shortestPathFinder.shortestPath(input));
    }
  });
};