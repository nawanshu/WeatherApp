'use strict';

/* Controllers */

angular.module('weatherApp.controllers', [])

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
    
    wd.forecast = openWeatherMap.queryForecastDaily({
      location: "Pune"
    });

    $scope.getForecastByLocation = function() {
      if (wd.location == '' || wd.location == undefined) {
        wd.message = 'Please provide a location';
        return;
      }
      wd.forecast = openWeatherMap.queryForecastDaily({
        location: wd.location
      });
    };
        
    $scope.getIconImageUrl = function(iconName) {
      return (iconName ? wd.iconBaseUrl + iconName + '.png' : '');
    };

  }])
