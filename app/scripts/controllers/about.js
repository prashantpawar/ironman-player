'use strict';

/**
 * @ngdoc function
 * @name ironmanPlayerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ironmanPlayerApp
 */
angular.module('ironmanPlayerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
