'use strict';

// Bootstrap styles
require('./styles');

var title = require('./templates/title.jade')({});
var Sudoku = require('./Sudoku.js');
var startMenu = require('./templates/start.json');
var winnerMenu = require('./templates/winner.json');

function sanitizeInput(input) {
  input = Number(input);
  return Number.isInteger(input) && input !== 0  ? input : '';
}

function attachEvents(sudoku, eventType, handler) {
  var boxes =  document.getElementsByClassName('sudoku-box');
  var len = boxes.length;
  var i;

  for (i = 0; i < len; i++) {
    boxes[i][eventType] = handler;
  }
}

function bootstrapMenu(sudoku, div, cb) {
  div.innerHTML = sudoku.html();
  attachEvents(sudoku, 'onclick', function () {
    cb(div);
  });
}

function startGame(sudoku, div) {
  sudoku.newGame();
  div.innerHTML = sudoku.html();
  attachEvents(sudoku, 'oninput', function (e) {
    var data = e.target.parentElement.classList;
    var newVal = sanitizeInput(e.target.value);

    // set the element to the sanitized input
    e.target.value = newVal;

    // update board with new value
    sudoku.update(data[0].slice(-1), data[1].slice(-1), newVal);
    if (sudoku.check()) {
      sudoku.board = winnerMenu;
      bootstrapMenu(sudoku, div, function (div) {
        startGame(sudoku, div);
      });
    }
  });
}

function app() {
  var sudoku = new Sudoku(startMenu);
  var titleDiv = document.getElementById('title');
  var sudokuDiv = document.getElementById('sudoku');
  titleDiv.innerHTML = title;

  bootstrapMenu(sudoku, sudokuDiv, function (div) {
    startGame(sudoku, div);
  });
  // bootstrapEvents(sudoku);
}

window.onload = app;
