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

        this.connected = 'disconnected';
        this.name = $scope.config.name;

        that.receiveStatus = 'inactive';

        this.connect = function() {
            var socket = socketFactory({
                ioSocket: window.io.connect('http://localhost:' + $scope.config.port)
            });


            socket.on('case:receive', function() {
                that.receiveStatus = 'passed';
            });
        };

        // this.receive = function () {

        // }

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