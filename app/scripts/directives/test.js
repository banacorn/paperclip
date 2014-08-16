'use strict';

/**
 * @ngdoc directive
 * @name paperclipApp.directive:test
 * @description
 * # test
 */
angular.module('paperclipApp')
    .directive('test', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/test.html',
            controller: 'TestCtrl',
            controllerAs: 'test'
        };
    });