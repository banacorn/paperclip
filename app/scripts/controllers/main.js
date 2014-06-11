'use strict';

angular.module('paperclipApp')
    .factory('socket', function(socketFactory) {

        var socket = window.io('http://localhost:4000');

        var options = {
            ioSocket: socket
        };
        return socketFactory(options);
    })
    .controller('MainCtrl', function($scope, socket) {

        socket.emit('hey', 'hi');

        $scope.items = ['a', 'b'];

        $scope.addTodo = function() {
            $scope.items.push($scope.todoText);
        };
    });