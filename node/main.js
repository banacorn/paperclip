var socketioServer = require('socket.io');
var httpServer = require('pushstate-server');

var io = new socketioServer(3200);

// HTML5 pushstate shit
httpServer.start({
    port: 3000,
    directory: './dist'
});

io.on('connection', function(socket) {

    // receive
    console.log('case:receive');
    socket.emit('case:receive', function() {});

    // send
    socket.on('case:send', function() {
        console.log('case:send');
    });

    // ping pong
    socket.on('case:ping pong', function() {
        socket.emit('case:ping pong');
        console.log('case:ping pong');
    });
});