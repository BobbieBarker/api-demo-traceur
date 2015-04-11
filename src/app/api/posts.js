'use strict';

import {BASE_URL} from './api-config';


export default class ckPostService {
  constructor(){

  }

  get(){
    console.log('get');
    return 'get';
  }

  remove(id){
    console.log('remove');
    return 'remove';
  }

  update(id){
    console.log('update');
    return 'update';
  }

}
