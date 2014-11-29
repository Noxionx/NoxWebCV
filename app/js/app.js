define(["angular",
    "angular-route",
    "angular-material",
    "controllers/headerCtrl",
    "controllers/sidenavCtrl",
    "controllers/homeCtrl"
],function(){
    
    'use strict';
    angular.module('ngNoxCV', [
      'ngRoute',
      "ngMaterial",
      "controllers"
    ]).
    config(['$routeProvider', function($routeProvider) {
            $routeProvider
                    .when('/', {
			templateUrl: 'partials/home.html',
			controller : 'homeCtrl'
		});
    }]);
});


