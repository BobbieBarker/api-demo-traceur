'use strict';
/*jshint esnext: true */

class MainCtrl {
  constructor ($scope, ckSDK) {

console.log(ckSDK)

let thingOne = {name: 'cheese', type: 'postService', value: 1};
let thingTwo = {name: 'steve', type: 'userService', value: 2};

console.log(ckSDK.Pipeline.build(thingOne, thingTwo));

    /*
    console.log(ckSDK.Pipeline.postService.update());
    console.log(ckSDK.Pipeline.userService.get());

    console.log(ckSDK.Pipeline.userService.update());
    console.log(ckSDK.Pipeline.postService.get());

    console.log(ckSDK.Pipeline.postService.update());
    console.log(ckSDK.Pipeline.userService.get());
*/

  }
}

MainCtrl.$inject = ['$scope', 'ckSDK'];

export default MainCtrl;
