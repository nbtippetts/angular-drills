angular.module('myApp').controller('mainCtrl', function($scope, myService){
     $scope.list = myService.getData();
})
