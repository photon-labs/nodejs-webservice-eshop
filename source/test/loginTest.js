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
