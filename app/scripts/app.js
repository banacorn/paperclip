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
}

var cases = {
    // connection: {
    //     status: 'untested',
    //     name: 'Connect',
    //     description: 'connect with socket.io server'
    // },
    pingPong: {
        status: 'untested',
        name: 'Ping Pong',
        description: 'send and then recieve an event without data'
    }
};


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
    .service('haskellSocket', ['socketFactory', SocketConnector])
    .controller('TestCtrl', function(haskellSocket) {

        var socket;
        var that = this;

        this.cases = cases;

        this.pass = function(testName) {
            that.cases[testName] = 'passed';
        };

        this.fail = function(testName) {
            that.cases[testName] = 'failed';
        };

        this.connect = function() {

            // connection
            socket = haskellSocket.connect(this);
            that.pass('connection');

            // pingPong
            socket.on('pong', function() {
                that.pass('pingPong');
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