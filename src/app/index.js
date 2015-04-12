'use strict';
/*jshint esnext: true */

import MainCtrl from './main/main.controller';
import NavbarCtrl from '../components/navbar/navbar.controller';
import {default as esSixLibModule}from './esSix-lib-demo/esSix-factory';

angular.module('apiDemoTraceur', [
'ngAnimate',
'ngCookies',
'ngTouch',
'ngSanitize',
'ui.router',
'ngMaterial',
esSixLibModule
])
  .controller('MainCtrl', MainCtrl)
  .controller('NavbarCtrl', NavbarCtrl)


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
