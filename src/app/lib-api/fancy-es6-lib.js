'use strict';

var moduleName  = 'apiDemoTraceur.api';

import {sdk} from '../esSix-lib-demo/esSix-lib';

angular.module(moduleName, []).factory('ckSDK', sdk);
export default moduleName;
