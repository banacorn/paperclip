'use strict';

function SocketConnector(socketFactory) {

    var port = 3200;
    var socket = null;

    this.connect = function(controller) {
        if (socket !== null) {
            throw 'socket already connected and created!';
        } else {
            return socketFactory({
                ioSocket: window.io.connect('http://localhost:' + port)
            });
        }
    };

    // this.fromServer = function () {
    //     if (socket !== null) {
    //         socket.on()
    //     } else {
    //         throw 'socket not connected';
    //     }
    // }
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
    .service('socketConnector', ['socketFactory', SocketConnector])
    .controller('TestCtrl', function(socketConnector) {

        var socket;

        var cases = this.cases = {
            connection: {
                status: 'untested',
                name: 'Connect',
                description: 'connect with socket.io server'
            },
            pingPong: {
                status: 'untested',
                name: 'Ping Pong',
                description: 'send and then recieve an event without data'
            }
        };

        var pass = this.pass = function(testName) {
            cases[testName] = 'passed';
        };

        var fail = this.fail = function(testName) {
            cases[testName] = 'failed';
        };

        this.connect = function() {

            // connection
            socket = socketConnector.connect(this);
            pass('connection');

            // pingPong
            socket.on('pong', function() {
                pass('pingPong');
            });
        };

        this.pingPong = function() {
            if (socket) {
                socket.emit('ping');
            } else {
                throw 'socket not connected';
            }
        };
    });