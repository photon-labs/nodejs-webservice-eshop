var exception = require('../../exception');
var dbconfigure = require('../dbconfigure');
var utility = require('../../utility');
var Sequelize = require("sequelize");
var sequelize = dbconfigure.getSequelize();
var path = require('path');

var User = sequelize.import(path.normalize(__dirname + "/../models/User"));

exports.addUser = function(firstname, lastname, email, password, phoneNumber, callback) {
	var message = {};
	User.count({ where: {email: email} }).on('success', function(user) {
	}).on('success', function(user) {
		if(user == 0){
			User.build({first_name:firstname,last_name:lastname, email: email, password: password, phone: phoneNumber })
			.save().on('success', function() {
				User.findAll({order: 'id DESC', limit: 1}).on('success', function(userid) {
					for (var i = 0; i < userid.length; i++) {
							var userId = userid[i].id;
					}
					message.message = "Inserted";
					message.userId = userId;
					message.successMessage = "Success";
					callback(message);
				})
			})
		}
		else {
			message.message = "Already exist";
			message.userId = "0";
			message.successMessage = "Failed";
			callback(message);
		}
	})
}; 