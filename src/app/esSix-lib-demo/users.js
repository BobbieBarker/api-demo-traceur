'use strict';
/*jshint esnext: true */
import {BASE_URL} from './api-config';
import {Incrementor} from './test-incrementor';
import {Injector, Inject, bind} from 'angular2/di';


export class UserService {
  constructor(@Inject(Incrementor) incrementor: Incrementor){
    this.incremetor = incrementor;

  }

  get(){
    console.log('get');
    return this.incremetor.getVal();
  }

  remove(id){
    console.log('remove');
    return 'remove';
  }

  update(){
    console.log('get');
    return this.incremetor.setVal();
  }
}
