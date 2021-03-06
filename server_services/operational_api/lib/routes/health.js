'use strict'

const health = {
  register: function (server, options, next) {

    server.route({
      method: 'GET',
      path: '/health',
      handler: function(request, reply){
        //TODO (jos) check for all the services?
        reply({'StatusCode': '200', 'CheckType': 'overall'});
      }
    });

    server.route({
      method: 'GET',
      path: '/health/{name}',
      handler: function(request, reply){
        // TODO (jos) check for a particular service
        reply({'StatusCode': '200', 'CheckType': encodeURIComponent(request.params.name)});
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
