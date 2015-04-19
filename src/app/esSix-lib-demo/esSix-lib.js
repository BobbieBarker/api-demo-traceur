'use strict';
/*jshint esnext: true */
import {Injector, Inject, bind} from 'angular2/di';
import {PostService} from './posts';
import {UserService} from './users';
import {Pipeline} from './pipeline';
import {Incrementor} from './test-incrementor';

export const sdk = () => {
  let injector = new Injector([
    PostService,
    UserService,
    Pipeline,
    Incrementor
    ]);
  let pipeline = injector.get(Pipeline)

  return {
    Pipeline: pipeline
  }
}
