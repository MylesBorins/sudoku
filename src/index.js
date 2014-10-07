'use strict';

// Bootstrap styles
require('./styles');

var _ = require('lodash');
var range = _.range;

var grid = require('./templates/grid.jade')({
  rows: range(9),
  columns: range(9)
});

var title = require('./templates/title.jade')({});

var app = function () {
  var titleDiv = document.getElementById('title');
  var gridDiv = document.getElementById('grid');
  titleDiv.innerHTML = title;
  gridDiv.innerHTML = grid;
};

window.onload = app;
