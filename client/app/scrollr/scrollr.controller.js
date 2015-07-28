'use strict';

angular.module('skyfly33App')
.controller('ScrollrCtrl', function ($scope) {
	$scope.message = 'Hello';

	var s = skrollr.init();
});
