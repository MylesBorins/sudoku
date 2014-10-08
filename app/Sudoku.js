'use strict';
// Lib dependencies
var lib = require('../lib');
var grid = require('./templates/grid.jade');

function Sudoku(board) {
  var that = {
    board: board || lib.generate()
  };

  that.newGame = function (board) {
    that.board = board || lib.generate();
    return that;
  };

  that.html = function () {
    return grid({
      board: that.board
    });
  };
  that.update = function (x, y, newval) {
    that.board[x][y] = newval;
    return that;
  };
  that.check = function () {
    return lib.check(that.board);
  };
  return that;
}

module.exports = Sudoku;
