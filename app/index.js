'use strict';

// Bootstrap styles
require('./styles');

var title = require('./templates/title.jade')({});
var Sudoku = require('./Sudoku.js');

function sanitizeInput(input) {
  input = Number(input);
  return Number.isInteger(input) && input !== 0  ? input : '';
}

function bootstrapEvents(sudoku) {
  var boxes =  document.getElementsByClassName('sudoku-box');
  var len = boxes.length;
  var i;

  function inputHandler(e) {
    var data = e.srcElement.parentElement.classList;
    var newVal = sanitizeInput(e.srcElement.value);

    // set the element to the sanitized input
    e.target.value = newVal;

    // update board with new value
    sudoku.update(data[0].slice(-1), data[1].slice(-1), newVal);
    console.log(sudoku.check());
  }

  for (i = 0; i < len; i++) {
    boxes[i].oninput = inputHandler;
  }
}

function app() {
  var sudoku = new Sudoku();
  var titleDiv = document.getElementById('title');
  var sudokuDiv = document.getElementById('sudoku');
  titleDiv.innerHTML = title;
  sudokuDiv.innerHTML = sudoku.html();
  bootstrapEvents(sudoku);
}

window.onload = app;
