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
var register = require('../lib/eshop/service/register.js');
assert = require("assert");

/* describe("Testing Register Service", function() {
	it("With New User Details", function(done){
		var firstname = "Mohd";
		var lastname = "Ibr";
		var email = "mo@in.com"
		var password = "awc";
		var phonenumber = 34235;
		var registerjson = { "message":"Inserted", "userId":30, "successMessage":"Success" }
		register.addUser(firstname, lastname, email, password, phonenumber, function(registerdata) {
			assert.deepEqual(JSON.stringify(registerjson), JSON.stringify(registerdata), "Register Success");
			done();
		});		
	}); 
}); */

describe("Testing Register Service", function() {
	it("With Existing User Details", function(done){
		setTimeout(done, 100);
		var firstname = "Mohamed";
		var lastname = "Ibrahim";
		var email = "photon@photon.in"
		var password = "photon";
		var phonenumber = 12345;
		var registerjson = {"message":"Already exist","userId":"0","successMessage":"Failed"};
		register.addUser(firstname, lastname, email, password, phonenumber, function(registerdata) {
			assert.deepEqual(JSON.stringify(registerjson), JSON.stringify(registerdata), "Register Success");
		});		
	}); 
});  