'use strict';
/*jshint esnext: true */
import {Injector, Inject, bind} from 'angular2/di';
import {default as ckPostService} from './posts';
import {default as ckUserService} from './users'

//var moduleName = 'apiDemoTraceur.api.sdk'

export const sdk = () => {
  let injector = new Injector([ckPostService, ckUserService]);
  let UserService = injector.get(ckUserService)
  let PostService = injector.get(ckPostService);
  return {
    PostService: PostService,
    UserService: UserService
  }
}

//angular.module(moduleName, []).factory('ckSDK', sdk);
//export default moduleName
