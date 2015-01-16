'use strict';

/**
 * @ngdoc overview
 * @name ironmanPlayerApp
 * @description
 * # ironmanPlayerApp
 *
 * Main module of the application.
 */
angular
  .module('ironmanPlayerApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngTouch',
	'firebase'
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
