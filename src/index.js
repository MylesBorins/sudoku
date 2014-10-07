'use strict';

require('./styles');

var hello = require('./templates/hello.jade')({});

var app = function () {
  document.body.innerHTML = hello;
};

window.onload = app;
