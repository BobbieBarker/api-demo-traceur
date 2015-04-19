'use strict';
/*jshint esnext: true */

class MainCtrl {
  constructor ($scope, ckSDK) {

    console.log(ckSDK.Pipeline.postService.update());
    console.log(ckSDK.Pipeline.userService.get());

    console.log(ckSDK.Pipeline.userService.update());
    console.log(ckSDK.Pipeline.postService.get());

    console.log(ckSDK.Pipeline.postService.update());
    console.log(ckSDK.Pipeline.userService.get());


  }
}

MainCtrl.$inject = ['$scope', 'ckSDK'];

export default MainCtrl;
