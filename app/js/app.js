'use strict';


// Declare app level module which depends on filters, and services
angular.module('4sightsq', ['4sightsq.filters', '4sightsq.services', '4sightsq.directives', '4sightsq.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/venues', {templateUrl: 'partials/venues.html', controller: 'venues'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/venues'});
  }]);
