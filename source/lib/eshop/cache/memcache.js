/*
 * ###
 * PHR_NodeJSWebService
 * %%
 * Copyright (C) 1999 - 2012 Photon Infotech Inc.
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License")
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
var memcache = require('memcache');
var port = 1030;
var host = 'localhost';


module.exports = function() {
	var client = new memcache.Client(port, host);
	client.port = '1030';
	client.host = 'localhost';


	client.on('connect', function(){
	    // no arguments - we've connected
	    console.info('connected');
	});

	client.on('close', function(){
	    // no arguments - connection has been closed
	    console.info('close');
	});

	client.on('timeout', function(){
	    // no arguments - socket timed out
	    console.info('timeout');
	});

	client.on('error', function(e){
	    // there was an error - exception is 1st argument
	    console.info('error');
	});

	// connect to the memcache server after subscribing to some or all of these events
	client.connect();

	return client;
}