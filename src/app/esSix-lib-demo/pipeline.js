'use strict';
import {Inject} from 'angular2/di';
import {PostService} from './posts';
import {UserService} from './users';

export class Pipeline {
  constructor(
    @Inject(UserService) userService: UserService,
    @Inject(PostService) postService: PostService
    ){
      Pipeline.postService = postService;
      Pipeline.userService = userService;
  }

  build( ...Canvas){
    let self = this;
    let composePipeLine = (theArgs) => {
      return theArgs.map((element) => {
        return self.constructor[element.type].update(element.value);
      })
    };
    console.log(composePipeLine(Canvas))
    Promise.all(composePipeLine(Canvas)).then(data => {
      console.log(data)
    });
  }
}
