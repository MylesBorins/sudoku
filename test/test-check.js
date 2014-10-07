'use strict';
var test = require('tape');
var check = require('../lib/check');

var solution = require('./fixtures/solution.json');

test('check: load', function (t) {
  t.ok(check, 'it should load');
  t.equal(typeof check, 'function', 'it should return a function');
  t.end();
});

test('check: functionality', function (t) {
  t.ok(check(solution), 'when given a correct solution it should return true');
  t.notOk(check([]), 'when given an incorrect solution it should return false');
  t.end();
});
