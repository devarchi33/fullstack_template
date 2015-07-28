'use strict';

describe('Controller: ScrollrCtrl', function () {

  // load the controller's module
  beforeEach(module('skyfly33App'));

  var ScrollrCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScrollrCtrl = $controller('ScrollrCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
