/*
 * GPII Universal Personalization Framework GPII "OS Stubs" Index
 *
 * Copyright 2020 Raising the Floor -- US Inc. All rights reserved.
 * Copyright 2014 Lucendo Development Ltd.
 *
 * Licensed under the New BSD license. You may not use this file except in
 * compliance with this License.
 *
 * You may obtain a copy of the License at
 * https://github.com/GPII/universal/blob/master/LICENSE.txt
 * 
 * The R&D leading to these results received funding from the
 * Department of Education - Grant H421A150005 (GPII-APCP). However,
 * these results do not necessarily represent the policy of the
 * Department of Education, and you should not assume endorsement by the
 * Federal Government.
 *
 * The research leading to these results has received funding from the European Union's
 * Seventh Framework Programme (FP7/2007-2013)
 * under grant agreement no. 289016.
 */

"use strict";

var fluid = require("gpii-universal");

var gpii = fluid.registerNamespace("gpii");
var osstubs = fluid.registerNamespace("gpii.osstubs");

require("./gpii/node_modules/OSStubsUtilities/OSStubsUtilities.js");
require("./gpii/node_modules/nativeSettingsHandler");

module.exports = fluid;
