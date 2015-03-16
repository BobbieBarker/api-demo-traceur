'use strict';
/*jshint esnext: true */

class PlaceHolderApi {
  constructor(UserService, PostService){
    this.users = UserService;
    this.posts = PostService;
  }
}

PlaceHolderApi.$inject = ['UserService', 'PostService'];

export default PlaceHolderApi;
