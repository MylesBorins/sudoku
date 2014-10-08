'use strict';
// Shim it for now
var _ = require('lodash');
var example = require('../test/fixtures/example-board.json');
function genereateBoard() {
  // Returns a length 81 array
  return _.cloneDeep(example);
}

module.exports = genereateBoard;
