'use strict';
var test = require('tape');
var _ = require('lodash');

var sudoku = require('../lib');

test('lib: loading', function (t) {
  t.plan(2);
  t.ok(sudoku, 'it should load');
  t.equal(typeof sudoku, 'object', 'it should return an object');
});

test('lib: api', function (t) {
  t.plan(2);
  t.ok(sudoku.generate, 'it should have a method called generate');
  t.ok(sudoku.check, 'it should have a method called check');
});
