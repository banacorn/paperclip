'use strict';

/**
 * @ngdoc function
 * @name paperclipApp.controller:PaperclipCtrl
 * @description
 * # PaperclipCtrl
 * Controller of the paperclipApp
 */
angular.module('paperclipApp')
    .controller('PaperclipCtrl', function($scope) {
        $scope.testConfigs = [{
            name: 'Haskell',
            port: 4000
        }, {
            name: 'Node',
            port: 3200
        }];
    });