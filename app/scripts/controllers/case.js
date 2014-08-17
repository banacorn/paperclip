'use strict';

/**
 * @ngdoc function
 * @name paperclipApp.controller:CaseCtrl
 * @description
 * # CaseCtrl
 * Controller of the paperclipApp
 */
angular.module('paperclipApp')
    .controller('CaseCtrl', function($scope, $attrs) {
        $scope.connector = $attrs.connector !== undefined;
    });