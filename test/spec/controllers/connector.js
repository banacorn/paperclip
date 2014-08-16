'use strict';

describe('Controller: ConnectorCtrl', function () {

  // load the controller's module
  beforeEach(module('paperclipApp'));

  var ConnectorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConnectorCtrl = $controller('ConnectorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
