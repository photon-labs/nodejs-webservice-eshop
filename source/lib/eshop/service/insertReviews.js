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