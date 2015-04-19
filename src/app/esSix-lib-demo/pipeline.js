'use strict';
import {Injector, Inject, bind} from 'angular2/di';
import {PostService} from './posts';
import {UserService} from './users';


export class Pipeline {
  constructor(@Inject(PostService) postService: PostService, @Inject(UserService) userService: UserService){
    console.log(postService, 'this is a postservice');
    this.postService = postService;
    this.userService = userService
  }
}
