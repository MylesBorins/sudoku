'use strict';
// use node deepEqual for now
var deepEqual = require('deep-equal');
// shim solution for right now
var solution = require('../test/fixtures/solution.json');

function checkSolution(board) {
  return deepEqual(board, solution);
}

module.exports = checkSolution;
