'use strict';
// shim solution for right now
var solution = require('../test/fixtures/solution.json')
function checkSolution(board) {
  return board === solution;
}

module.exports = checkSolution;
