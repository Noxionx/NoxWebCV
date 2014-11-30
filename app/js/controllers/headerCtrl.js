define(["angular", "angular-material", "angular-route", "./controllers"],function(){
    angular.module("controllers").controller("headerCtrl",["$scope", "$location", "$mdDialog", function($scope, $location, $mdDialog){
           $scope.currentPage=$location.path(); 
           $scope.$watch(
                function() { return $location.path();},
                function(newValue, oldValue) {
                  if ( newValue !== oldValue ) {
                    $scope.currentPage = newValue;
                  }
                }
              );
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
