'use strict';

// Bootstrap styles
require('./styles');

var _ = require('lodash');
var range = _.range;

var grid = require('./templates/grid.jade')({
  rows: range(9),
  columns: range(9)
});

var app = function () {
  var gridDiv = document.getElementById('grid');
  gridDiv.innerHTML = grid;
};

window.onload = app;
