'use strict';

/**
 * @ngdoc function
 * @name paperclipApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the paperclipApp
 */
angular.module('paperclipApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
