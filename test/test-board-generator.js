var test = require('tape');
var _ = require('lodash');
// require in the board generator
var boardGenerator = require('../lib/');

test('board-generator: loading', function (t) {
  t.plan(2);
  t.ok(boardGenerator, 'it should load');
  t.equal(typeof boardGenerator, 'function', 'it should return a function')
});

test('board-generator: functionality', function(t) {
  t.plan(4);
  var board = boardGenerator();
  t.ok(_.isArray(board), 'the generator should return an array');;
  t.equal(board.length, 9, 'the array should have 9 items');
  var row = board[0];
  t.ok(_.isArray(row), 'each row should be an array');
  t.equal(row.length, 9, 'the array should have 9 items')
});
