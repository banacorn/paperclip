'use strict';

angular
    .module('paperclipApp', ['btford.socket-io'])
    .factory('socket', function(socketFactory) {
        return socketFactory({
            ioSocket: window.io.connect('http://localhost:3000')
        });
    })
    .controller('socketController', function(socket) {
        socket.on('connect', function() {
            console.log('connected!!');
        });

    });