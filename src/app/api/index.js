'use strict';

var moduleName  = 'apiDemoTraceur.api';

import {default as userServiceModule} from './users';
import {default as postServiceModule} from './posts';
import {default as placeHolderModule} from './placeholder-api-service';

angular.module(moduleName, [
  'apiDemoTraceur.api.PlaceHolderApi',
  'apiDemoTraceur.api.UserService',
  'apiDemoTraceur.api.PostService'
]);

export default moduleName;
