angular.module('arrayApp').controller('arrayController', function($scope, myService){

      $scope.list = myService.getData();
      
})
