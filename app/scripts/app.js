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
  
}]);
