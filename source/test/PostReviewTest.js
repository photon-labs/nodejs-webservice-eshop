var dbconfigure = require('../lib/eshop/dbconfigure');
dbconfigure.configure('Production');
var review = require('../lib/eshop/service/insertReviews.js');
assert = require("assert");

describe("Testing PostReview Service", function() {
	it("With productId", function(done){
		setTimeout(done, 100);
		var productId = 5;
		var userId = 1;
		var rating = 5;
		var comment = "comment";
		var commentDate = "29-01-12 00:00:00";
		var reviewJson = {"successMessage":"Success"};
		review.postReviews(productId, userId, rating, comment, commentDate, function(reviewdata){
			assert.deepEqual(JSON.stringify(reviewJson), JSON.stringify(reviewdata), "PostReview Success");
		});
	}); 
});
