// Example modified from mosca's website
var mqtt    = require('mqtt');
// var client  = mqtt.connect('mqtt://localhost:1883'); // <-- on Linux
var client  = mqtt.connect('mqtt://192.168.99.100:1883'); // <-- on Mac

client.on('connect', function () {
  client.subscribe('presence');
  client.publish('presence', 'Hello mqtt from Client 2');
});

client.on('message', function (topic, message) {
  console.log("Message on Client 2" + message.toString());
  client.end();
});
