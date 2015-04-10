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

    /**
    ***Nested Promises
    **/
    //The Problem
    PlaceHolderApi.users.get().then(onething => {
      PlaceHolderApi.posts.get().then(anotherthing => {
        doSomethingOnThem(onething, anotherthing);
      });
    });


    //The Solution
    Promise.all([PlaceHolderApi.users.get(), PlaceHolderApi.posts.get()]).then(
      _.spread((onething, anotherthing)  =>  {
        console.log('down here bro')
        doSomethingOnThem(onething, anotherthing);
      })
    )
    //Destructoring
    let first = PlaceHolderApi.users.get().then(data =>  {return data});
    let second = PlaceHolderApi.posts.get().then(data => {return data})

    Promise.all([first, second]).then(([a, b]) => console.log('this is b', b))

    const doSomethingOnThem => (onething, anotherthing){
      console.log('this is doSomethingOnThem')
      console.log(onething, anotherthing)
    }


  }
}

MainCtrl.$inject = ['$scope', 'PlaceHolderApi'];

export default MainCtrl;
