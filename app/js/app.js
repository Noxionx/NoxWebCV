define(["angular",
    "angular-route",
    "angular-material",
    "localization",
    "controllers/headerCtrl",
    "controllers/sidenavCtrl",
    "controllers/homeCtrl",
    
    "controllers/studiesCtrl",
    "controllers/worksCtrl",
    "controllers/skillsCtrl",
    "controllers/miscCtrl"
],function(){
    
    'use strict';
    angular.module('ngNoxCV', [
      'ngRoute',
      "ngMaterial",
      "common.localization",
      "controllers"
    ]).controller("appCtrl",["$scope", "$location", function($scope, $location){
                    $scope.theme = "grey";
                    $scope.$watch(
                        function() { return $location.path();},
                        function(newValue, oldValue) {
                          if ( newValue !== oldValue ) {
                            $scope.changeTheme(newValue);
                          }
                        }
                      );
              $scope.changeTheme = function(path){
                  switch(path){
                                case '/' : $scope.theme = "grey";
                                                        break;
                                case '/studies' : $scope.theme = "blue";
                                                        break;
                                case '/works' : $scope.theme = "green";
                                                        break;
                                case '/skills' : $scope.theme = "orange";
                                                        break;
                                case '/misc' : $scope.theme = "red";
                                                        break;
                            }
              };
              $scope.changeTheme($location.path());
    }]).config(['$routeProvider', function($routeProvider) {
            $routeProvider
                    .when('/', {
			templateUrl: 'partials/home.html',
			controller : 'homeCtrl'
		})
                    .when('/studies', {
			templateUrl: 'partials/studies.html',
			controller : 'studiesCtrl'
		}) 
                    .when('/works', {
			templateUrl: 'partials/works.html',
			controller : 'worksCtrl'
		})
                    .when('/skills', {
			templateUrl: 'partials/skills.html',
			controller : 'skillsCtrl'
		})
                    .when('/misc', {
			templateUrl: 'partials/misc.html',
			controller : 'miscCtrl'
		});
    }]);
});


