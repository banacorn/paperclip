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
    .module('paperclipApp', ['btford.socket-io', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'TestCtrl',
                controllerAs: 'test'
            })
            .when('/banana', {
                templateUrl: 'views/about.html',
                controller: 'TestCtrl',
                controllerAs: 'test'
            });
        $locationProvider.html5Mode(true);
    })
    .service('socket', ['socketFactory', Socket])
    .controller('TestCtrl', function(socket) {
        this.connect = socket.connect;
    });