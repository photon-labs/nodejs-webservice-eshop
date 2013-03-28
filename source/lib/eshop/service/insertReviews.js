var exception = require('../../exception');
var dbconfigure = require('../dbconfigure');
var utility = require('../../utility');
var Sequelize = require("sequelize");
var sequelize = dbconfigure.getSequelize();
var path = require('path');

var Review = sequelize.import(path.normalize(__dirname + "/../models/Review"));

exports.postReviews = function(productId, userId, rating, comment, commentDate, callback) {
    Review.build({ pd_id: productId, user_id: userId, comment: comment, rating:rating, comment_date: commentDate })
    .save().on('success', function() {
		var message = {};
		message.successMessage = "Success";
		callback(message);
    })
    .on('failure', function(err) {
        var message = {};
        message.successMessage = "Failed";
		callback(message);
	})
};