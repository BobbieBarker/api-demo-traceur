'use strict';
import {Injector, Inject, bind} from 'angular2/di';
import {BASE_URL} from './api-config';
import {Incrementor} from './test-incrementor';


export class PostService {
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
