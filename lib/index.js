'use strict';
var _ = require('lodash');
var boardGenerator = require('./board-generator');

// Let's leave an array in this singleton to work with
var board = [];

function getBoard() {
  if (_.isEmpty(board)) {
    board = boardGenerator();
  }
  return board;
}

module.exports = getBoard;
