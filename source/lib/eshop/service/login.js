var exception = require('../../exception');
var dbconfigure = require('../dbconfigure');
var utility = require('../../utility');
var Sequelize = require("sequelize");
var sequelize = dbconfigure.getSequelize();
var path = require('path');

var User = sequelize.import(path.normalize(__dirname + "/../models/User"));

exports.getUserdetails = function(email, password, callback) {
	var message = {};
	User.count({ where: {email: email, password: password} }).on('success', function(user) {
		}).on('success', function(user) {
			User.find({ where: {email: email, password: password} }).on('success', function(userdata) { 
				if(user > 0){
					message.message = "success";
					message.userId = userdata.id;
					message.userName = userdata.first_name + ' ' + userdata.last_name;
					message.successMessage = "Login Success";
				}
				else{
					message.message = "failure";
					message.userId = "0";
					message.userName = "";
					message.successMessage = "Login failed";
				}
			callback(message);
		})
	})
};