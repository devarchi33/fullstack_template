'use strict';

describe('Controller: Custom1Ctrl', function () {

  // load the controller's module
  beforeEach(module('skyfly33App'));

  var Custom1Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Custom1Ctrl = $controller('Custom1Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
