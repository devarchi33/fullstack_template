'use strict';

angular.module('skyfly33App')
.controller('Custom1Ctrl', function ($scope) {

	var MAX_LEN = 100;
	var WARN_THRESHOLD = 50;
	var DANGER_TRESHOLD = 10;

	$scope.message = "";
	
	$scope.remaining = function() {
		return MAX_LEN - $scope.message.length;
	};

	$scope.shouldSuccess = function() {
		return $scope.remaining;
	};	

	$scope.shouldWarn = function() {
		return $scope.remaining() < WARN_THRESHOLD;
	};

	$scope.shouldDanger = function(){
		return $scope.remaining() < DANGER_TRESHOLD;
	};

	$scope.hasValidLength = function() {
		return $scope.message.length < MAX_LEN ? true : false;
	};

	$scope.clear = function() {
		return $scope.message = "";
	};
});