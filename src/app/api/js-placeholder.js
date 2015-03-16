'use strict';
/*jshint esnext: true */

const users = new WeakMap();
const posts = new WeakMap();

class PlaceHolderApi {
constructor(UserService, PostService){
  users.set(this, UserService)
  posts.set(this, PostService)
}

users(){
  return users.get(this);
}

posts(){
  return posts.get(this);
}



}

PlaceHolderApi.$inject = ['UserService', 'PostService'];

export default PlaceHolderApi;
