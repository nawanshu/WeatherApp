'use strict';

/* Services */

angular.module('weatherApp.services', ['ngResource'])

  .factory('weatherSvc', function($resource) {

    var apiKey = '34f84e58f8bf2e934ef56a611e76be2a';
    var apiBaseUrl = 'https://api.openweathermap.org/data/2.5/';

    return $resource(apiBaseUrl + ':path/:subPath?q=:location',
      {
        APPID: apiKey,
        mode: 'json',
        callback: 'JSON_CALLBACK',
        units: 'metric',
        lang: 'en'
      },
      {
        queryForecastDaily: {
          method: 'JSONP',
          params: {
            path: 'forecast',
            subPath: 'daily',
            cnt: 7
          },
          isArray: false
        }
      }
    )
  });
