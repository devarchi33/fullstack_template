'use strict';

angular.module('skyfly33App')
.controller('NavbarCtrl', function ($scope, $location, Auth) {
  $scope.menu = [
  {
    'title': 'Home',
    'link': '/'
  },
  {
    'title': 'Custom1',
    'link': '/custom1'
  },
  {
    'title': 'Scrollr_Practice',
    'link': '/scrollr'
  },
  {
    'title': 'kakao',
    'link': '/kakao'
  }];

  $scope.isCollapsed = true;
  $scope.isLoggedIn = Auth.isLoggedIn;
  $scope.isAdmin = Auth.isAdmin;
  $scope.getCurrentUser = Auth.getCurrentUser;

  $scope.logout = function() {
    Auth.logout();
    $location.path('/login');
  };

  $scope.isActive = function(route) {
    return route === $location.path();
  };
});