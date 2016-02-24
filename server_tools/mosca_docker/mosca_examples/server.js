// Example modified from mosca's website
var mosca = require('mosca');

var ascoltatore = {
  //using ascoltatore - Make sure MongoDB is installed in the machine
  type: 'mongo',        
  url: 'mongodb://localhost:27017/mqtt',
  pubsubCollection: 'ascoltatori',
  mongo: {}
};

var moscaSettings = {
  port: 1883,
  backend: ascoltatore,
  persistence: {
    factory: mosca.persistence.Mongo,
    url: 'mongodb://localhost:27017/mqtt'
  }
};

var server = new mosca.Server(moscaSettings);

server.on('ready', setup);
function setup() {
  console.log('Mosca server is up and running')
}

server.on('published', function(packet, client) {
  console.log('Published', packet.payload);
});

server.on('clientConnected', function(client) {
  console.log('client connected', client.id);     
  sendHello(client.id); // Publishing to topic '/hello/connected'
});

function sendHello(id) {
   message = {
     topic: '/hello/connected',
     payload: id,
     qos: 0,
     retain: true
   };
   server.publish(message, function() { console.log('said hello'); });
}

