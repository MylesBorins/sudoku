'use strict';
// Shim it for now
var _ = require('lodash');
var example = require('../test/fixtures/example-board.json');

// This is a shim for generating a board
// When fully implemented this function could either provide
// a board from a set collection, or algorithmically generate one

// I found this white paper outlining various ways to generate sudoku
// http://zhangroup.aporc.org/images/files/Paper_3485.pdf
// Given more time it should not prove difficult to implement an
// efficient algorithm with the appropriate research

function genereateBoard() {
  return _.cloneDeep(example);
}

module.exports = genereateBoard;
