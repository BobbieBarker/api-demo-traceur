'use strict';
/*jshint esnext: true */

class MainCtrl {
  constructor ($scope, ckSDK) {

console.log(ckSDK)

let thingOne = {name: 'cheese', type: 'postService', value: 1};
let thingTwo = {name: 'steve', type: 'userService', value: 2};

console.log(ckSDK.Pipeline.build(thingOne, thingTwo));
console.log()
ckSDK.Pipeline.postService.get().then((data) => data.json().then((res) => {
  console.log(res)
}))


  }
}

MainCtrl.$inject = ['$scope', 'ckSDK'];

export default MainCtrl;
