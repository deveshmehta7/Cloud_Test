/*jslint node: true, nomen: true, plusplus: true*/
'use strict';
var chai = require('chai'),
    shortestPathFinder = require('../../shortestPathFinder'),
    sampleInput1 = require('../fixtures/sampleInput1'),
    sampleInput2 = require('../fixtures/sampleInput2'),
    sampleInput3 = require('../fixtures/sampleInput3'),
    sampleInput4 = require('../fixtures/sampleInput4'),
    expect = chai.expect;

describe("Testing the shortest path finder", function () {

  describe('Testing the shortest path finders', function () {

    it('Should test for sample input 1', function (done) {
      var output1 = shortestPathFinder.shortestPath(sampleInput1);
      expect(10615.561393656457).equal(output1);
      done();
    });

    it('Should test for sample input 2', function (done) {
      var output2 = shortestPathFinder.shortestPath(sampleInput2);
      expect(6285.714285714285).equal(output2);
      done();
    });

    it('Should test for sample input 3', function (done) {
      var output3 = shortestPathFinder.shortestPath(sampleInput3);
      expect(0).equal(output3);
      done();
    });

    it('Should test for sample input 4', function (done) {
      var output4 = shortestPathFinder.shortestPath(sampleInput4);
      expect(0).equal(output4);
      done();
    });

  });
});









