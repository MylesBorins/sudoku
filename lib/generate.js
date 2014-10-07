'use strict';
// Shim it for now
function genereateBoard() {
  // Returns a length 81 array 
  return require('./example-board.json');;
}

module.exports = genereateBoard;
