'use strict';

var moduleName  = 'apiDemoTraceur.api';

import {default as sdkModule} from './placeholder-api-service';

angular.module(moduleName, [
  sdkModule
]);

export default moduleName;
