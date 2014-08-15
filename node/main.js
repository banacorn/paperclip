var socketioServer = require('socket.io');
var httpServer = require('pushstate-server');

var io = new socketioServer(3200);

// HTML5 pushstate shit
httpServer.start({
    port: 3000,
    directory: './dist'
});

io.on('connection', function(socket) {

    socket.on('ping', function() {
        console.log('ping!');
        socket.emit('pong');
    });


});