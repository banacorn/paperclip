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

        console.log(socketFactory);
        // specialize controller with configurations
        var config = testSettings[$scope.$index];


        this.connected = false;
        this.connect = function() {
            this.connected = true;
            return socketFactory({
                ioSocket: window.io.connect('http://localhost:' + config.port)
            });
        };

        this.name = config.name;
    });