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