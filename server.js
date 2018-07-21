var express = require('express'),
    app = express(),
    config = require('./config/config'),
    route = require('./route');

app.use('/api/v1/getShortestPath', route.getShortestPath);

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const server = app.listen(config.port);

// timeout of server to 15 minutes
server.timeout = 1000 * 60 * 15;
console.log('Cloud Cover assignment server running on ' + config.port);

route.getShortestPath(function (err, shortestPath) {
  if (err) {
    console.log(err);
  } else {
    console.log(shortestPath);
  }
});