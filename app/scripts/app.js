'use strict';

function Socket(socketFactory) {

    var socket = null;

    this.connect = function() {
        if (socket !== null) {
            throw 'socket already connected and created!';
        } else {
            socket = socketFactory({
                ioSocket: window.io.connect('http://localhost:3000')
            });
        }
    };
}

angular
    .module('paperclipApp', ['btford.socket-io'])
    .service('socket', ['socketFactory', Socket])
    .controller('testController', function(socket) {
        this.connect = socket.connect;
    });