'use strict';


/**
 * @ngdoc function
 * @name paperclipApp.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the paperclipApp
 */
angular.module('paperclipApp')
    .controller('TestCtrl', function($scope, testSettings, socketFactory) {

        this.connected = false;

        this.name = $scope.config.name;
        this.connect = function() {
            this.connected = true;
            return socketFactory({
                ioSocket: window.io.connect('http://localhost:' + $scope.config.port)
            });
        };

    // $scope.cases = [{
    //     name: 'Connect',
    //     description: 'connect with the server',
    //     connector: true,
    //     func: this.connect
    // }, {
    //     name: 'Receive',
    //     description: 'greetings from the server',
    //     connector: false
    // }, {
    //     name: 'Send',
    //     description: 'blessings to the server',
    //     connector: false
    // }, {
    //     name: 'Ping Pong',
    //     description: 'back and forth',
    //     connector: false
    // }];

    });