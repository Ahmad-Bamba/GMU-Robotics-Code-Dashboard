/*
  TODO: Make router static ip: 10.12.34.1
        Make raspi static ip: 10.12.34.2
        Make laptop static ip: 10.12.34.3
*/

window.onload = function() {
  var program = require('express')();
  var http = require('http').Server(app);
  var io = require('socket.io')(http);

  app.get('/', function(req, res) {
    res.sendfile('index.html');
  });

  io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('disconnect', function() {
      console.log('a user disconnected')
    });
  });

  http.listen(9685, function(){
    console.log('listening on *:9685');
  });
}
