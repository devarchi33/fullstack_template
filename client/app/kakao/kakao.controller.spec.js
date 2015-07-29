'use strict';

describe('Controller: KakaoCtrl', function () {

  // load the controller's module
  beforeEach(module('skyfly33App'));

  var KakaoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KakaoCtrl = $controller('KakaoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
