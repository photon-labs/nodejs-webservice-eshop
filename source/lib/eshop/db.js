var login = require(__dirname + "/service/login");
var register = require(__dirname + "/service/register");
var category = require(__dirname + "/service/category");
var products = require(__dirname + "/service/products");
var allproducts = require(__dirname + "/service/allproducts");
var productDetails = require(__dirname + "/service/productDetails");
var newProducts = require(__dirname + "/service/newProducts");
var specialProducts = require(__dirname + "/service/specialProducts");
var search = require(__dirname + "/service/search");
var getReviews = require(__dirname + "/service/getReviews");
var insertReview = require(__dirname + "/service/insertReviews");
var insertOrders = require(__dirname + "/service/insertOrder");
var OrderHistory = require(__dirname + "/service/getOrderHistory");

/* 
 * Service methods
 */
 
exports.getUser = function(req, res, callback) {                                  // Login Service
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	var email = req.body.login.loginEmail;
	var password = req.body.login.password;
	login.getUserdetails(email, password, function(json) {
		res.json(json);
	});
} 

exports.insertUser = function(req, res, callback) {                              // Register Service
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	var data = req.body;
    var firstname = data.register.firstName;
    var lastname = data.register.lastName;
    var email = data.register.email;
    var password = data.register.password;
    var phoneNumber = data.register.phoneNumber;
	register.addUser(firstname, lastname, email, password, phoneNumber, function(json) {
		res.json(json);
	}); 
};
 
exports.getCategories = function(req, res, callback) {  						// Category Service		
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	category.retrieveCategories( function(json) {
		res.json(json);
	});
};

exports.getProducts = function(req, res, categoryId, callback) {               // Products Service   
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	products.retrieveProducts(categoryId, function(json){
		res.json(json);
	});
};

exports.getAllProducts = function(req, res, callback) {                       // AllProducts Service     
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	allproducts.retrieveAllProducts( function(json) {
		res.json(json);
	});
};

exports.getProductdetails = function(req, res, productId, callback) {        // ProductDetails service
    res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	productDetails.retrieveProductdetails(productId, function(json) {
		res.json(json);
	});
};

exports.getNewProducts = function(req, res, callback) {                     // NewProducts service
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	newProducts.retrieveNewProducts(function(json) {
		res.json(json);
	});
};

exports.getSpecialProducts = function(req, res, callback) {                // SpecialProducts service
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	specialProducts.retrieveSpecialProducts(function(json) {
		res.json(json);
	});
};

exports.getSearchdetails = function(req, res, searchword, callback) {              // Search service
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	search.retrieveSearchdetails(searchword, function(json) {
		res.json(json);
	});
};

exports.getReviews = function(req, res, productId, callback) {                     // getReviews service
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	getReviews.retrieveReviews(productId, function(json) {
		res.json(json);
	});
};

exports.insertReviews = function(req, res, callback) {                          // PostReviews service 
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	var data = req.body;
    var productId = data.review.productId;
    var userId = data.review.userId;
    var rating = data.review.rating;
    var comment = data.review.comment;
    var commentDate = data.review.commentDate;
	insertReview.postReviews(productId, userId, rating, comment, commentDate, function(json) {
		res.json(json);
	});
};

exports.insertOrder = function(req, res, callback) {									// InsertOrder service	
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	var data = req.body;
    var products = data.products;
    var firstName = data.customerInfo.billingAddress.firstName;
    var lastName = data.customerInfo.billingAddress.lastName;
    var address1 = data.customerInfo.billingAddress.address1;
    var address2 = data.customerInfo.billingAddress.address2;
    var city = data.customerInfo.billingAddress.city;
    var postcode = data.customerInfo.billingAddress.postcode;
	var comments = data.comments;
	var userId = data.userId;
	var totalPrice = data.totalPrice;
	var totalItem = data.totalItem;
	insertOrders.postOrder(products, firstName, lastName, address1, address2, city, postcode, comments, userId, totalPrice, totalItem, function(json) {
		res.json(json);
	});
};

exports.getOrderhistroy = function(req, res, userId, callback) {        // getOrderDetails service
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	OrderHistory.retrieveOrderhistroy(userId, function(json) {
		res.json(json);
	});
};
