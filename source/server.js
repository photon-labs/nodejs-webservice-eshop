/*
 * ###
 * PHR_NodeJSWebService
 * %%
 * Copyright (C) 1999 - 2012 Photon Infotech Inc.
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ###
 */
var utility = require('./lib/utility');
var configure = require('./lib/eshop/configure');
var logger = require('./lib/logger');
var http = require("http");
var dbconfigure = require('./lib/eshop/dbconfigure');
var currentEnv = process.argv[2];
dbconfigure.configure(currentEnv);
var services = require('./lib/eshop/services');
var db = require('./lib/eshop/db');

var serverConfig = utility.getConfigByName(currentEnv, 'Server');
require('dns').lookup(require('os').hostname(), function (err, address, fam) {
	var ipaddress = address;
	if (ipaddress == serverConfig.host || serverConfig.host == "localhost") {
		var app = require('express').createServer();
		configure.appConfigure(app);
		services.expose(app, serverConfig);
		app.listen(serverConfig.port);
		 var serverUrl = serverConfig.protocol + '://' + serverConfig.host 
		+ ':' + serverConfig.port  + '/' + serverConfig.context;
		console.log('Server running at ' + serverUrl);
	} else {
		  console.log("Invaldid IP Address is Configured");		
	}
})
