'use strict';

angular.module('skyfly33App')
.controller('LoginCtrl', function ($scope, Auth, $location, $window) {
  $scope.user = {};
  $scope.errors = {};

  $scope.login = function(form) {
    $scope.submitted = true;

    if(form.$valid) {
      Auth.login({
        email: $scope.user.email,
        password: $scope.user.password
      })
      .then( function() {
          // Logged in, redirect to home
          $location.path('/');
        })
      .catch( function(err) {
        $scope.errors.other = err.message;
      });
    }
  };

  $scope.loginOauth = function(provider) {
    $window.location.href = '/auth/' + provider;
  };

  // 카카오 로그인 버튼을 생성합니다.
  Kakao.Auth.createLoginButton({
    container: '#kakao-login-btn',
    success: function(authObj) {
      alert(JSON.stringify(authObj));
    },
    fail: function(err) {
      alert(JSON.stringify(err))
    }
  });
});
