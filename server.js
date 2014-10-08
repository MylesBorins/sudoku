'use strict';

// Very basic happy server to be used during development
// should also be sufficient for basic deployment (although it is a static site so might be overkill)

var Hapi = require('hapi');

var port = Number(process.argv[2]) || 1337;
var server = Hapi.createServer('localhost', port);

server.pack.register(require('./plugin'), function (err) {
  if (err) { console.error('Failes to load a plugin:', err); }
});

server.start();
console.log('server started on port', port);
