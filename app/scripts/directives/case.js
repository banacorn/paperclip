'use strict';

/**
 * @ngdoc directive
 * @name paperclipApp.directive:case
 * @description
 * # case
 */
angular.module('paperclipApp')
    .directive('case', function() {
        return {
            templateUrl: 'views/case.html',
            restrict: 'E',
            controller: 'CaseCtrl',
            controllerAs: 'caseCtrl',
            scope: {
                name: '@',
                description: '@'
            }
        };
    });