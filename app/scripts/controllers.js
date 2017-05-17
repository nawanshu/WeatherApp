'use strict';

/* Controllers */

angular.module('weatherApp.controllers', [])

  // Controller for "open weather map" api data search
  .controller('weatherCtrl',
    ['$scope','weatherSvc','ISO3166',
      function($scope,openWeatherMap,ISO3166) {

    $scope.weatherData={
        message : '',
        forecast : '',
        iconBaseUrl : 'http://openweathermap.org/img/w/',
        location: ''
    }      
          
     var wd = $scope.weatherData; 

    //We can enhance this application by adding background image using ng-style      
    /*$scope.defaultBackground = {
        background: 'url(./img/weather.jpg)'
    }  */  
    
    // On initialization load data for first example entry
    wd.forecast = openWeatherMap.queryForecastDaily({
      location: "Pune"
    });

    // Get forecast data for location as given in $scope.location
    $scope.getForecastByLocation = function() {
      if (wd.location == '' || wd.location == undefined) {
        wd.message = 'Please provide a location';
        return;
      }
      wd.forecast = openWeatherMap.queryForecastDaily({
        location: wd.location
      });
    };

    // Get icon image url
    $scope.getIconImageUrl = function(iconName) {
      return (iconName ? wd.iconBaseUrl + iconName + '.png' : '');
    };

  }])
