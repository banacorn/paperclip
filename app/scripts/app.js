'use strict';

/**
 * @ngdoc overview
 * @name paperclipApp
 * @description
 * # paperclipApp
 *
 * Main module of the application.
 */
angular
  .module('paperclipApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
