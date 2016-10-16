angular.module('apiApp').service('pokemonService', function($http){

  this.getData = function(){
    return data;
  }



        this.getPokemon = function(){
          return $http({
            method: "GET",
            url: "http://pokeapi.co/api/v2/pokedex/2/"
          })
      }



})
