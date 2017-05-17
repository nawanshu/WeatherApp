'use strict';

/**
 * @ngdoc overview
 * @name weatherAppApp
 * @description
 * # weatherAppApp
 *
 * Main module of the application.
 */
angular.module('weatherApp', [
  'ngRoute',
  'weatherApp.services',
  'weatherApp.controllers',
  "iso-3166-country-codes"
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/forecast', {templateUrl: 'views/forecast.html', controller: 'WeatherCtrl'});
  $routeProvider.otherwise({redirectTo: '/forecast'});
}]);
