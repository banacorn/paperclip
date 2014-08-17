'use strict';


/**
 * @ngdoc function
 * @name paperclipApp.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the paperclipApp
 */
angular.module('paperclipApp')
    .controller('TestCtrl', function($scope, socketFactory) {

        var socket = null;
        var that = this;

        this.name = $scope.config.name;

        // inactive attribute
        that.inactive = true;

        // initial status of all test cases
        that.connectStatus = 'disconnected';
        that.receiveStatus = 'inactive';
        that.sendStatus = 'inactive';
        that.pingPongStatus = 'inactive';

        this.run = function() {
            that.connect();
            $scope.$on('socket:' + that.name + ':connect', function() {
                that.send();
                that.pingPong();
            });
        };

        this.connect = function() {

            that.connectStatus = 'connecting';
            socket = socketFactory({
                ioSocket: window.io.connect('http://localhost:' + $scope.config.port)
            });

            // case:connect success
            socket.on('connect', function() {
                that.connectStatus = 'connected';
                // erase inactive attribute
                that.inactive = false;
                $scope.$emit('socket:' + that.name + ':connect');
            });

            // case:connect error
            socket.on('connect_error', function() {
                that.connectStatus = 'disconnected';
            });

            // case:receive
            socket.on('case:receive', function() {
                that.receiveStatus = 'passed';
            });

            // case:ping pong
            socket.on('case:ping pong', function() {
                that.pingPongStatus = 'passed';
            });
        };

        this.send = function() {
            if (socket !== null) {
                socket.emit('case:send');
                that.sendStatus = 'passed';
            }
        };

        this.pingPong = function() {
            if (socket !== null) {
                socket.emit('case:ping pong');
            }
        };


        // this.click = function(caseName) {




        //     // that.connected = 'connecting';

        //     // var socket = socketFactory({
        //     //     ioSocket: window.io.connect('http://localhost:' + $scope.config.port)
        //     // });

        //     console.log(caseName);

        //     // socket.on('connect', function() {
        //     //     console.log('connection success');
        //     //     $()
        //     //     that.connected = 'connected';
        //     // });

        //     // socket.on('connect_error', function() {
        //     //     that.connected = 'disconnected';
        //     // });

        // };



    });