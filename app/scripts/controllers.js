'use strict';

/* Controllers */

angular.module('weatherApp.controllers', [])

  // Controller for "open weather map" api data search
  .controller('weatherCtrl',
    ['$scope','weatherSvc','ISO3166',
      function($scope,openWeatherMap,ISO3166) {

    $scope.message = '';
    $scope.hasState = '';

    $scope.myObj = {
    "color" : "black",
    "background-color" : "coral",
    "font-size" : "60px",
    "padding" : "50px"
  }
    $scope.defaultBackground = {
        background: 'url(./img/weather.jpg)'
    }    
    
    var wd = $scope.weatherData; 
    
    $scope.iconBaseUrl = 'http://openweathermap.org/img/w/';

    // On initialization load data for first example entry
    $scope.forecast = openWeatherMap.queryForecastDaily({
      location: "Pune"
    });

    // Get forecast data for location as given in $scope.location
    $scope.getForecastByLocation = function() {

      if ($scope.location == '' || $scope.location == undefined) {
        $scope.hasState = 'has-warning';
        $scope.message = 'Please provide a location';
        return;
      }

      $scope.hasState = 'has-success';

      $scope.forecast = openWeatherMap.queryForecastDaily({
        location: $scope.location
      });
     console.log($scope.forecast);
    };

    // Get icon image url
    $scope.getIconImageUrl = function(iconName) {
      return (iconName ? $scope.iconBaseUrl + iconName + '.png' : '');
    };

  }])
