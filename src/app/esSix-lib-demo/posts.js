'use strict';
import {Injector, Inject, bind} from 'angular2/di';
import {Incrementor} from './test-incrementor';
import {BASE_URL} from './api-config';

export class PostService {
  constructor(@Inject(Incrementor) incrementor: Incrementor){
    this.incremetor = incrementor;
  }

  get(){
    return fetch(`${BASE_URL}/posts`)
  }

  remove(id){
    console.log('remove');
    return 'remove';
  }

  update(){
    return new Promise((resolve, reject) => {
      resolve(this.incremetor.setVal());
    })
  }

}
