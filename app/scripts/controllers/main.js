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
	var ref, jw, sync, playerState, playerDefaults, syncObject;

	playerDefaults = {
		id: 'playerrprEMyXDuyEU'
	};

	ref = new Firebase('https://ironman-player.firebaseio.com/player');
	sync = $firebase(ref);
    playerState = angular.extend({}, sync.$asObject(), playerDefaults);

	jw = jwplayer(playerState.id).setup({
		file: 'https://www.youtube.com/watch?v=UG9MgcmIOqE',
		width: '100%',
		aspectratio: '16:9'
	});

	$scope.pause = function() {
		if(jw.getState() === jw.PLAYING) {
			jw.pause();
		} else {
			jw.play();
		}
	};

}]);
