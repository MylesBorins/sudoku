'use strict';

// Bootstrap styles
require('./styles');

// Lib dependencies
var sudoku = require('../lib');

var board = sudoku.generate();

var grid = require('./templates/grid.jade')({
  board: board
});

var title = require('./templates/title.jade')({});

var app = function () {
  var titleDiv = document.getElementById('title');
  var gridDiv = document.getElementById('grid');
  titleDiv.innerHTML = title;
  gridDiv.innerHTML = grid;
};

window.onload = app;
