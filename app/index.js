'use strict';

// Bootstrap styles
require('./styles');

var title = require('./templates/title.jade')({});
var Sudoku = require('./Sudoku.js');

var app = function () {
  var sudoku = new Sudoku();
  var titleDiv = document.getElementById('title');
  var sudokuDiv = document.getElementById('sudoku');
  titleDiv.innerHTML = title;
  sudokuDiv.innerHTML = sudoku.html();
};

window.onload = app;
