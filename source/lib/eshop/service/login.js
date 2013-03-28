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