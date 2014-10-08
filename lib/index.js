'use strict';
var generate = require('./generate');
var check = require('./check');

// interface that exports the generate / check functions
module.exports = {
  generate: generate,
  check: check
};
