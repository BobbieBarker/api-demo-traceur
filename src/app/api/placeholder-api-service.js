'use strict';
/*jshint esnext: true */
var moduleName = 'apiDemoTraceur.api.PlaceHolderApi'
class PlaceHolderApi {
  constructor(UserService, PostService){
    this.users = UserService;
    this.posts = PostService;
  }
}

PlaceHolderApi.$inject = ['UserService', 'PostService'];
angular.module(moduleName, []).service('PlaceHolderApi', PlaceHolderApi);
export default moduleName;
