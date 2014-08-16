'use strict';

/**
 * @ngdoc function
 * @name paperclipApp.controller:ConnectorCtrl
 * @description
 * # ConnectorCtrl
 * Controller of the paperclipApp
 */
angular.module('paperclipApp')
    .controller('ConnectorCtrl', function($scope) {

        var config = $scope.connectors[$scope.$index];

        this.name = config.name;
    });