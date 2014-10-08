var path = require('path');

// Exports hapi plugin that serves the public folder as a stattic directory

exports.register = function (plugin, options, next) {
  plugin.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: path.join(__dirname, 'public/')
      }
    }
  });
  next();
};

exports.register.attributes = {
  pkg: require('./package.json')
};
