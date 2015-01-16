'use strict';

/**
 * @ngdoc function
 * @name ironmanPlayerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ironmanPlayerApp
 */
angular.module('ironmanPlayerApp')
  .controller('MainCtrl', ['$scope', '$firebase', function ($scope, $firebase) {
	  var ref, jw, sync;

	  ref = new Firebase("https://ironman-player.firebaseio.com/");

	  jw = jwplayer('playerrprEMyXDuyEU').setup({
		  file: 'https://www.youtube.com/watch?v=UG9MgcmIOqE',
		  image: '//www.longtailvideo.com/content/images/jw-player/lWMJeVvV-876.jpg',
		  width: '100%',
		  aspectratio: '16:9'
	  });

	  sync = $firebase(ref);

	  $scope.pause = function() {
		  if(jw.getState() === jw.PLAYING)
			  jw.pause();
		  else
			  jw.play();
	  };
  }]);
