angular.module('apiApp').service('myService', function($http){

      this.getSmurf = function(){
        return pokemon_entries;
      }

      this.getSmurf = function(){
        return $http({
          method: "GET",
          url: "http://pokeapi.co/api/v2/pokedex/2/"
        })
    }
})
