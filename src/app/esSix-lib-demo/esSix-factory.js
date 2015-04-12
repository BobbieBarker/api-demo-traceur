'use strict';

var moduleName  = 'esSixLib';

import {sdk} from './esSix-lib';

angular.module(moduleName, []).factory('ckSDK', sdk);
export default moduleName;
