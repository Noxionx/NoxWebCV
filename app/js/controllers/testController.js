define(["angular"],function(){
    angular.module("controllers",[]).controller("testController",["$scope", function($scope){
        $scope.testValue = 50;
    }]);
});
