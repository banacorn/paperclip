'use strict';

/**
 * @ngdoc function
 * @name paperclipApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the paperclipApp
 */
angular.module('paperclipApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
