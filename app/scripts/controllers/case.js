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
        $scope.passive = $attrs.passive !== undefined;

        // inter-controller communication with TestCtrl
        $attrs.$observe('caseStatus', function(value) {
            $scope.status = $attrs.caseStatus;
        });

        $scope.$on('test:' + $scope.name, function(ev, data) {
            console.log(ev, data);
        });

    });