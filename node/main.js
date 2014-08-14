var Server = require('socket.io');
var httpServer = require('pushstate-server');

var io = new Server(3001);

httpServer.start({
    port: 3000,
    directory: './dist'
});