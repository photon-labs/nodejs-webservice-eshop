/*
 * PHR_NodeJSWebService
 *
 * Copyright (C) 1999-2013 Photon Infotech Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var dbconfigure = require('../lib/eshop/dbconfigure');
dbconfigure.configure('Production');
var login = require('../lib/eshop/service/login.js');
assert = require("assert");

describe("login with correctUsername and password", function() {
	it("retrieves by email", function(done){
		setTimeout(done, 100);
		var userdata = {};
		var user = {};
		user = { "message" : "success", "userId": 1, "userName": "John Anderson", "successMessage": "Login Success" };  
		login.getUserdetails("john@phresco.com", "john", function(userdata) {
			assert.deepEqual(JSON.stringify(user), JSON.stringify(userdata), "Login Success");
		});
	}); 
}); 

describe("login with incorrectUsername and password", function() {
	it("retrieves by email and password", function(done){
		setTimeout(done, 100);
		var userdata = {};
		var user = {};
		user = { "message" : "success", "userId": 1, "userName": "John Anderson", "successMessage": "Login Success" };  
		login.getUserdetails("john1@phresco.com", "john", function(userdata) {
			assert.notEqual(JSON.stringify(user), JSON.stringify(userdata), "Login Success");
		});
	}); 
});

describe("login with correctUsername and incorrectpassword", function() {
	it("retrieves by email and password", function(done){
		setTimeout(done, 100);
		var userdata = {};
		var user = {};
		user = { "message" : "success", "userId": 1, "userName": "John Anderson", "successMessage": "Login Success" };  
		login.getUserdetails("john@phresco.com", "john1", function(userdata) {
			assert.notEqual(JSON.stringify(user), JSON.stringify(userdata), "Login Success");
		});
	}); 
});

describe("login with incorrectUsername and incorrectpassword", function() {
	it("retrieves by email and password", function(done){
		setTimeout(done, 100);
		var userdata = {};
		var user = {};
		user = { "message" : "success", "userId": 1, "userName": "John Anderson", "successMessage": "Login Success" };  
		login.getUserdetails("john1@phresco.com", "john1", function(userdata) {
			assert.notEqual(JSON.stringify(user) , JSON.stringify(userdata), "Login Success");
		});
	}); 
});

describe("login without Username and password", function() {
	it("retrieves by email and password", function(done){
		setTimeout(done, 100);
		var userdata = {};
		var user = {};
		user = { "message" : "success", "userId": 1, "userName": "John Anderson", "successMessage": "Login Success" };  
		login.getUserdetails(" ", " ", function(userdata) {
			assert.notEqual(JSON.stringify(user), JSON.stringify(userdata), "Login Success");
		});
	}); 
});
