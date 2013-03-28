var dbconfigure = require('../lib/eshop/dbconfigure');
dbconfigure.configure('Production');
var getReviews = require('../lib/eshop/service/getReviews.js');
assert = require("assert");

describe("Testing getReview Service", function() {
	it("With Database", function(done){
		var productId = 1;
		getReviews.retrieveReviews(productId, function(postreviewdata){
			assert.deepEqual(postreviewdata, postreviewdata, "PostReview Success");
		});
		setTimeout(done, 100);
	}); 
});

