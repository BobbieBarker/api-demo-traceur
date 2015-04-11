'use strict';
/*jshint esnext: true */

class MainCtrl {
  constructor ($scope, ckSDK) {
    console.log(ckSDK.PostService.get());

  }
}

MainCtrl.$inject = ['$scope', 'ckSDK'];

export default MainCtrl;
