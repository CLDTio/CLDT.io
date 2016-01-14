'use strict'

const health = {
  register: function (server, options, next) {

    server.route({
      method: 'GET',
      path: '/health',
      handler: function(request, reply){
        //TODO (jos) check for all the services?
        reply({'ok': 'overall'});
      }
    });

    server.route({
      method: 'GET',
      path: '/health/{name}',
      handler: function(request, reply){
        // TODO (jos) check for a particular service
        reply({'ok': encodeURIComponent(request.params.name)});
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
