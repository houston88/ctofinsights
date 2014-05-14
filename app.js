// Simple static serve to run in node
var express = require('express'),
  app = express(),
  http = require('http'),
  server = http.createServer(app)

server.listen(3000);

// Serve static files
app.use(express.static(__dirname + '/app'));

console.log("Server running at http://localhost:3000/");