define(["angular", "angular-material", "angular-route", "./controllers"],function(){
    angular.module("controllers").controller("headerCtrl",["$scope", "$mdDialog", function($scope, $mdDialog){
            
         $scope.showInfos = function(ev) {
            $mdDialog.show({
              controller: infosCtrl,
              templateUrl: 'partials/infos.html',
              targetEvent: ev,
            });
        };
    }]);
    function infosCtrl($scope, $mdDialog) {
            $scope.hide = function() {
              $mdDialog.hide();
            };
        }
});
