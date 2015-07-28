'use strict';

angular.module('skyfly33App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/custom1', {
        templateUrl: 'app/custom1/custom1.html',
        controller: 'Custom1Ctrl'
      });
  });
