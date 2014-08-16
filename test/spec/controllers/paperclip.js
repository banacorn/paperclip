'use strict';

describe('Controller: PaperclipCtrl', function () {

  // load the controller's module
  beforeEach(module('paperclipApp'));

  var PaperclipCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PaperclipCtrl = $controller('PaperclipCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
