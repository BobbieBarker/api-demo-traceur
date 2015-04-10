'use strict';

import {BASE_URL} from './api-config';

var moduleName = 'apiDemoTraceur.api.PostService';
const HTTP = new WeakMap();

class PostService {
  constructor($http){
    HTTP.set(this, $http);
  }

  get(){
    return HTTP.get(this).get(`${BASE_URL}/posts`).then(result => result.data);
  }

  remove(id){
    return HTTP.get(this).delete(`${BASE_URL}/posts/${id}`).then(result => result.data);
  }

  update(id){
    return HTTP.get(this).put(`${BASE_URL}/posts/${id}`).then(result => result.data);
  }

}

PostService.$inject = ['$http'];
angular.module(moduleName, []).service('PostService', PostService);
export default moduleName;
