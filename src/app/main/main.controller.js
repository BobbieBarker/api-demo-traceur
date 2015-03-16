'use strict';
/*jshint esnext: true */

class MainCtrl {
  constructor ($scope, PlaceHolderApi) {
    console.log(PlaceHolderApi)
    PlaceHolderApi.users.getUsers().then(function(data){
      console.log(data)
    })
  }
}

MainCtrl.$inject = ['$scope', 'PlaceHolderApi'];

export default MainCtrl;
