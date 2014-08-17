'use strict';

describe('Controller: CaseconnectCtrl', function () {

  // load the controller's module
  beforeEach(module('paperclipApp'));

  var CaseconnectCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CaseconnectCtrl = $controller('CaseconnectCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
