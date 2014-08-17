'use strict';

describe('Directive: case', function () {

  // load the directive's module
  beforeEach(module('paperclipApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<case></case>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the case directive');
  }));
});
