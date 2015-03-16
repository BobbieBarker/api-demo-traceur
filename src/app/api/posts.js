'use strict';

import {BASE_URL} from './api-config';

const HTTP = new WeakMap();

class PostService {
  constructor($http){
    HTTP.set(this, $http);
  }

  get(){
    return HTTP.get(this).get(`${BASE_URL}/posts`).then(result => result.data);
  }

  static postsFactory($http){
    return new PostService($http)
  }
}

PostService.postsFactory.$inject = ['$http'];
export default PostService;
