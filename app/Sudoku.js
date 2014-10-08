'use strict';
// Lib dependencies
var lib = require('../lib');
var grid = require('./templates/grid.jade');

// Factory pattern similar to that found in Crockford's the good parts

function Sudoku(board) {
  // Attach board if given to contructor, otherwise generate a new board
  var that = {
    board: board || lib.generate()
  };

  // replace board on start of new game
  that.newGame = function (board) {
    that.board = board || lib.generate();
    return that;
  };

  // return templated html string based on current board
  that.html = function () {
    return grid({
      board: that.board
    });
  };

  // update content in board.
  that.update = function (x, y, newval) {
    that.board[x][y] = newval;
    return that;
  };

  // Do we have a winner?
  that.check = function () {
    return lib.check(that.board);
  };
  return that;
}

module.exports = Sudoku;
