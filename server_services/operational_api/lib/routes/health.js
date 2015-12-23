'use strict'

const health = {
  register: function (server, options, next) {

    server.route({
      method: 'GET',
      path: '/test',
      handler: function(request, reply){
        reply('test for API');
      }
    });

    server.route({
      method: 'GET',
      path: '/test/{name}',
      handler: function(request, reply){
        reply('test for ' + encodeURIComponent(request.params.name) + '!');
      }
    });
    next();
  }
};

health.register.attributes = {
  name: 'health',
  version: '0.0.1'
};

module.exports = health;
