'use strict';

angular
    .module('paperclipApp', ['btford.socket-io'])
    .factory('socket', function(socketFactory) {
        return socketFactory();
    })
    .controller('fooController', function(socket) {

    });