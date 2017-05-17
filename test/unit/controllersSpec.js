'use strict';

/* jasmine specs for controllers go here */

describe('WeatherApp controllers', function(){

  beforeEach(module('weatherApp.controllers'));
  beforeEach(module('weatherApp.services'));
  beforeEach(module('iso-3166-country-codes'));

  describe('weatherCtrl', function() {
    var $scope, ctrl, $httpBackend;

    beforeEach(module('weatherApp'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://api.openweathermap.org/data/2.5').
        respond([{forecast: {city: {name: 'Pune'} } }]);

      $scope = $rootScope.$new();
      ctrl = $controller('weatherCtrl', { $scope: $scope });
    }));

    it('should be total forcast item 7', function(){
        expect($scope.forecast.length).toBe(7);
    })
  });
});
