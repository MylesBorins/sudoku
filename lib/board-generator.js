'use strict';
// Shim it for now
var shimmedBoard = require('./example-board.json');

function genereateBoard() {
  // Returns a length 81 array 
  return shimmedBoard;
}

module.exports = genereateBoard;
