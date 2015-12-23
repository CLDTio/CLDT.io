'use strict';

const Hapi = require('hapi');
const Good = require('good');

const server = new Hapi.Server();
server.connection({ port: 3000 });

// Register routes
server.register(
  { register: require('./lib/routes/health.js') },
  { routes: { prefix: '/api' } },
  (err) => {
    if (err) {
      throw err;
    }
});

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Hello, world! API stuff on /api/?');
  }
});

server.register({
  register: Good,
  options: {
    reporters: [{
      reporter: require('good-console'),
      events: {
        response: '*',
        log: '*'
      }
    }]
  }
}, (err) => {
  if (err) {
    throw err;
  }
});

server.start(() => {
  console.log('Server running at:', server.info.uri);
});
