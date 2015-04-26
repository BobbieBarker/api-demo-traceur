'use strict';
import {Injector, Inject, bind} from 'angular2/di';
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
    return new Promise((resolve, reject) => {
      resolve(this.incremetor.setVal());
    })
  }

}
