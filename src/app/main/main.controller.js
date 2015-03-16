'use strict';
/*jshint esnext: true */

class MainCtrl {
  constructor ($scope, PlaceHolderApi) {
    console.log(PlaceHolderApi)
    PlaceHolderApi.users.get().then(data => {
      console.log(data)
    })

    PlaceHolderApi.posts.get().then(data => {
      console.log(data)
    })

    PlaceHolderApi.users.remove(1).then(data => {
      console.log(data)
    })
  }
}

MainCtrl.$inject = ['$scope', 'PlaceHolderApi'];

export default MainCtrl;
