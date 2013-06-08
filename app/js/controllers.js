'use strict';

/* Controllers */

angular.module('4sightsq.controllers', []).
  controller('venues', ['$scope', '$http', function($scope, $http) {
    var url = 'https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=J4XP3T5VJEAC45MQYS3YUPCZCLIH30CD0TDPBMUJMJ5LO0WK&client_secret=QGIGMOQEUCQ1GBJRGHZV32NHMSYULHJQ2A32W4S5B0M1KT32&v=20130604&callback=JSON_CALLBACK';
    $scope.name = "Venues";
    $http.jsonp(url).success(function(data) {
      $scope.data = data;
      $scope.venues = data.response.venues;
    });
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {
    $scope.status = "baller";
  }]);