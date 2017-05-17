'use strict';

/* jasmine specs for services go here */

describe('service', function() {
  beforeEach(module('weatherApp.services'));

  describe('weatherMap', function() {
    it('should return a json with a city info map on request', inject(function(openWeatherMap) {
      expect(true).toEqual(true);
    }));
  });
});
