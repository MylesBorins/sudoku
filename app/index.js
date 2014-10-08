'use strict';

// Bootstrap styles
require('./styles');

// load Sudoku factory
var Sudoku = require('./Sudoku.js');
// load templates
var title = require('./templates/title.jade')({});
// Load data to inject into sudoku
var startMenu = require('./templates/start.json');
var winnerMenu = require('./templates/winner.json');

// This function verifies a users input is in fact a number and returns a santized value
function sanitizeInput(input) {
  input = Number(input);
  return Number.isInteger(input) && input !== 0  ? input : '';
}

// A generic function that can attack an event handler to a specific event type
// to all input boxes in a sudoku grid

function attachEvents(sudoku, eventType, handler) {
  var boxes =  document.getElementsByClassName('sudoku-box');
  var len = boxes.length;
  var i;

  for (i = 0; i < len; i++) {
    boxes[i][eventType] = handler;
  }
}

// function to be called to create a menu
// this is used on start up and on winning
// The callback is called whenever any input is clicked

function bootstrapMenu(sudoku, div, cb) {
  div.innerHTML = sudoku.html();
  attachEvents(sudoku, 'onclick', function () {
    cb(div);
  });
}

// function to be called when a new game is started
// it generates a new puzzle, attaches that puzzle to the dom,
// and attaches the appropriate event handlers to each input element

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

    // check if we have a winner
    // if so inject winner board and bootstrap menu

    if (sudoku.check()) {
      sudoku.board = winnerMenu;
      bootstrapMenu(sudoku, div, function (div) {
        startGame(sudoku, div);
      });
    }
  });
}

// inject the title and bootstrap the menu on initial load

function app() {
  var sudoku = new Sudoku(startMenu);
  var titleDiv = document.getElementById('title');
  var sudokuDiv = document.getElementById('sudoku');
  titleDiv.innerHTML = title;

  bootstrapMenu(sudoku, sudokuDiv, function (div) {
    startGame(sudoku, div);
  });
}

window.onload = app;
