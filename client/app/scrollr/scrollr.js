'use strict';

angular.module('skyfly33App')
.config(function ($routeProvider) {
	$routeProvider
	.when('/scrollr', {
		templateUrl: 'app/scrollr/scrollr.html',
		controller: 'ScrollrCtrl'
	});

	
});
