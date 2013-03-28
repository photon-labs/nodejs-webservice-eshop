var dbconfigure = require('../lib/eshop/dbconfigure');
dbconfigure.configure('Production');
var productdetails = require('../lib/eshop/service/productDetails.js');
assert = require("assert");

describe("Testing Products Details Service", function() {
	it("With ProductId", function(done){
		var productId = 22;
		var productdetailsJson = {"product":[{"id":22,"name":" BlackBerry Bold 9780 ","category":3,"model":"1022.0","specialProduct":0,"listPrice":387,"sellPrice":380,"description":"Cpu :\n    624 mhz processor\nPrimary :\n    5 mp, 2592x1944 pixels, autofocus, led flash, check quality\nWlan :\n    Wi-fi 802.11 b/g, uma\nCard slot :\n    Micro sd, up to 32gb, 2gb card included ","image":"product/bb_mobile_22.png","detailImage":"product/details/bb_mobile_22.png","rating":0,"details":{"TV Type":"LCD","Screen Size":"32' Inches","Screen Ratio":"16:9","TV Definition":"HDTV"}}]};
		productdetails.retrieveProductdetails(productId, function(productdetailsdata){
			assert.deepEqual(JSON.stringify(productdetailsJson), JSON.stringify(productdetailsdata), "ProductDetails Success");
		});	
		setTimeout(done, 100);
	}); 
});

describe("Testing Products Details Service", function() {
	it("With Incorrect ProductId", function(done){
		setTimeout(done, 100);
		var productId = 2;
		var productdetailsJson = {"product":[{"id":22,"name":" BlackBerry Bold 9780 ","category":3,"model":"1022.0","specialProduct":0,"listPrice":387,"sellPrice":380,"description":"Cpu :\n    624 mhz processor\nPrimary :\n    5 mp, 2592x1944 pixels, autofocus, led flash, check quality\nWlan :\n    Wi-fi 802.11 b/g, uma\nCard slot :\n    Micro sd, up to 32gb, 2gb card included ","image":"product/bb_mobile_22.png","detailImage":"product/details/bb_mobile_22.png","rating":0,"details":{"TV Type":"LCD","Screen Size":"32' Inches","Screen Ratio":"16:9","TV Definition":"HDTV"}}]};
		productdetails.retrieveProductdetails(productId, function(productdetailsdata){
			assert.notEqual(JSON.stringify(productdetailsJson), JSON.stringify(productdetailsdata), "ProductDetails Failure");
		});	
	}); 
});