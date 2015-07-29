'use strict';

angular.module('skyfly33App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/kakao', {
        templateUrl: 'app/kakao/kakao.html',
        controller: 'KakaoCtrl'
      });
  });
