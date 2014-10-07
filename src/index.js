'use strict';

require('./styles');

var numberBox = require('./templates/grid.jade')({});

var app = function () {
  document.body.innerHTML = numberBox;
};

window.onload = app;
