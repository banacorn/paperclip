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
        $scope.connectors = [{
            name: 'Haskell'
        }, {
            name: 'Node'
        }];

    });