'use strict';

/**
 * @ngdoc directive
 * @name paperclipApp.directive:connector
 * @description
 * # connector
 */
angular.module('paperclipApp')
    .directive('connector', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/connector.html',
            controller: 'ConnectorCtrl',
            controllerAs: 'connector'
        };
    });