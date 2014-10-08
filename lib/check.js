'use strict';
// use node deepEqual for now
// var deepEqual = require('deep-equal');
var _ = require('lodash');
// shim solution for right now
var solution = require('../test/fixtures/solution.json');

// This is a shim for checking the correctness of a board
// When properly implemented this function can either check
// against a provided solution or use an algorithm to check correctness
// if done algorithmically it will need to check the sum
// of all rows, columns, and boxes. It will also need to check
// each row / column / box for duplicates

function checkSolution(board) {
  return _.isEqual(board, solution);
}

module.exports = checkSolution;
