'use strict';
var test = require('tape');
var _ = require('lodash');
var Sudoku = require('../app/Sudoku');
var solution = require('./fixtures/solution.json');

test('Sudoku: load', function (t) {
  t.ok(Sudoku, 'it should load');
  t.equal(typeof Sudoku, 'function', 'it should be a function');
  t.end();
});

test('Sudoku: creation', function (t) {
  var sudoku = new Sudoku();
  var firstHTML;
  var secondHTML;
  
  t.ok(sudoku, 'it should return');
  t.equal(typeof sudoku, 'object', 'it should return an object');
  
  t.equal(typeof sudoku.html, 'function', 'it should have a method called html');
  firstHTML = sudoku.html();
  t.equal(typeof firstHTML, 'string', 'the html function should return a string');
  
  t.ok(_.isArray(sudoku.board), 'it should have an array called board');
  // Set a value to something the generator will never return
  sudoku.update(0, 0, 10);
  t.equal(sudoku.board[0][0], 10, 'the board should change after being updated');
  secondHTML = sudoku.html();
  t.notEqual(firstHTML, secondHTML, 'the html returned from sudoku should be different after board has been updated');
  
  t.ok(typeof sudoku.check, 'function', 'it should have a method caleld check');
  t.notok(sudoku.check(), 'check should return false if the current solution is incorrect');
  sudoku.board = solution;
  t.ok(sudoku.check(), 'check should return true if the solution is correct');
  t.end();
});
