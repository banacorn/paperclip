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

        this.connected = false;

        this.name = $scope.config.name;
        this.connect = function() {
            this.connected = true;
            return socketFactory({
                ioSocket: window.io.connect('http://localhost:' + $scope.config.port)
            });
        };
    });