'use strict';
// Shim it for now
function genereateBoard() {
  // Returns a length 81 array 
  return require('../test/fixtures/example-board.json');;
}

module.exports = genereateBoard;
