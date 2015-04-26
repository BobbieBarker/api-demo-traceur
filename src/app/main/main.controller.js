'use strict';
/*jshint esnext: true */

class MainCtrl {
  constructor ($scope, PlaceHolderApi) {

    console.log(PlaceHolderApi)
    PlaceHolderApi.users.get().then(data => {

    })

    PlaceHolderApi.posts.get().then(data => {

    })

    PlaceHolderApi.users.remove(1).then(data => {

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
        doSomethingOnThem(onething, anotherthing);
      })
    )
    //Destructoring
    let first = PlaceHolderApi.users.get().then(data =>  {return data});
    let second = PlaceHolderApi.posts.get().then(data => {return data})

    //Promise.all([first, second]).then(([a, b]) => console.log('this is b', b))

    const doSomethingOnThem = (onething, anotherthing) => {
      //console.log('this is doSomethingOnThem')
      //console.log(onething, anotherthing)
    }

    //Experiment
    let experimentalFunction = (...theArgs) => {
      return theArgs.map((element) => {
        if(_.isEqual(element.type, 'typeOne')){
          return PlaceHolderApi.users.remove(element.value);
        }
        if(_.isEqual(element.type, 'typeTwo')){
          return PlaceHolderApi.posts.remove(element.value);
        }
      })
    }
    let thingOne = {name: 'cheese', type: 'typeOne', value: 1};
    let thingTwo = {name: 'steve', type: 'typeTwo', value: 2};


    Promise.all(experimentalFunction(thingOne, thingTwo)).then((data) => {
      console.log(data);
    });

  }
}

MainCtrl.$inject = ['$scope', 'PlaceHolderApi'];

export default MainCtrl;
