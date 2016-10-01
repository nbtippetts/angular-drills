angular.module('apiApp').controller('mainCtrl', function($scope, myService){

    $scope.getSmurf = function(){
      myService.getSmurf().then(function(response){
        $scope.users = response.data;
      })
    }
  $scope.getSmurf()
})
