'use strict';
/*jshint esnext: true */

import {BASE_URL} from './api-config';

const HTTP = new WeakMap();
class UserService {
  constructor($http){
    HTTP.set(this, $http);
  }

  getUsers(){
    return HTTP.get(this).get(BASE_URL + '/users').then(result => result.data);
  }

  deleteUser(id){
    return HTTP.get(this).delete(BASE_URL + '/users/' + id).then(result => result.data);
  }

  static userFactory($http){
    return new UserService($http)
  }
}

UserService.userFactory.$inject = ['$http'];
export default UserService
