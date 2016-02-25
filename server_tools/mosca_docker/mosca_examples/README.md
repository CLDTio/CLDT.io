# Mosca Examples
A couple of simple examples on how to use [Mosca](https://github.com/mcollina/mosca) as an MQTT broker.

Note that the Server example uses MongoDB as a backend for the pub/sub service.

## Usage

### Standalone
 - Install MongoDB
 - Install mosca and mqtt with npm
 - Run `node server.js` and then `node client.js`

### With docker script
 - Run the docker script in the parent folder, which will run Mosca standalone in a container.
 - Run `node client.js` and then run `node client_2.js`
 - Note that the server is not needed in this setup.

Jos, Dec 2015; Feb 2016
