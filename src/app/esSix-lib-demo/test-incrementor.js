'use strict';

export class Incrementor {
  constructor(){
    this.value = 0;
  }

  setVal(){
    this.value++;
    return this.value;
  }

  getVal(){
    return this.value;
  }
}
