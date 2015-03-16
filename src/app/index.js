'use strict';
/*jshint esnext: true */

import MainCtrl from './main/main.controller';
import NavbarCtrl from '../components/navbar/navbar.controller';
import UserService from './api/users';
import PostService from './api/posts';
import PlaceHolderApi from './api/js-placeholder';

angular.module('apiDemoTraceur', [
'ngAnimate',
'ngCookies',
'ngTouch',
'ngSanitize',
'ui.router',
'ngMaterial'])
  .controller('MainCtrl', MainCtrl)
  .controller('NavbarCtrl', NavbarCtrl)
  .factory('UserService', UserService.userFactory)
  .factory('PostService', PostService.postsFactory)
  .service('PlaceHolderApi', PlaceHolderApi)

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
