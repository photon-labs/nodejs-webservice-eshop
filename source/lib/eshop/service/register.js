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