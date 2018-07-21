/*jslint node: true, nomen: true, plusplus: true*/
"use strict";
var config = require('../config/config'),
    Graphs = require('node-dijkstra'),
    utils = require('../utils/utilityService');

/**
 * Finds the best optimun path for the given input
 * @param input
 */
exports.shortestPath = function (input) {

  const graph = new Graphs();

  for (var index = 0; index < input.canTravel.length; index++) {
    var spittedCanTravel = input.canTravel[index].split(" ");
    var connectedNodes = {};
    for (var i = 0; i < spittedCanTravel.length; i++) {
      var currentCanTravel = spittedCanTravel[i];

      // converting data from degree to radian and creating source and destination object
      var source = {
        latitude: utils.convertDegreeToRadian(input.latitudes[index]),
        longitude: utils.convertDegreeToRadian(input.longitudes[index])
      };

      var destination = {
        latitude: utils.convertDegreeToRadian(input.latitudes[currentCanTravel]),
        longitude: utils.convertDegreeToRadian(input.longitudes[currentCanTravel])
      };

      // add key with distance from nodes
      connectedNodes[currentCanTravel] = utils.calculateDistance(source, destination);
    }
    // adding vertex to nodes
    graph.addVertex(JSON.stringify(index), connectedNodes);
  }

  var shortestPath = graph.shortestPath(JSON.stringify(input.source), JSON.stringify(input.destination)) || [];

  var shortestDistance = 0.0;

  // getting the distance as we have the path.
  for (var iterator = 0; iterator < shortestPath.length - 1; iterator++) {
    var sourceAirport = shortestPath[iterator];
    var destinationAirport = shortestPath[iterator + 1];
    var source1 = {
      latitude: utils.convertDegreeToRadian(input.latitudes[sourceAirport]),
      longitude: utils.convertDegreeToRadian(input.longitudes[sourceAirport])
    };
    var destination1 = {
      latitude: utils.convertDegreeToRadian(input.latitudes[destinationAirport]),
      longitude: utils.convertDegreeToRadian(input.longitudes[destinationAirport])
    };
    var distance1 = utils.calculateDistance(source1, destination1);
    shortestDistance = shortestDistance + distance1;
  }
  return shortestDistance;
};