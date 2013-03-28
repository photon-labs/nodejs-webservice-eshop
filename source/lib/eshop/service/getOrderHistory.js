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

var Order = sequelize.import(path.normalize(__dirname + "/../models/Order"));
var Orderitem = sequelize.import(path.normalize(__dirname + "/../models/Orderitem"));

exports.retrieveOrderhistroy = function(userId, callback) {
	var productsArray = new Array();
	var orderRecords = {};
	
	Order.findAll({where: ["userid = ?", userId]}).on('success', function(order) {
		for (var j = 0; j < order.length; j++) {
			var product = {};
			product.orderId = order[j].id ;
			product.totalqty = order[j].od_totalqty;
			product.totalPrice = order[j].od_totalprice;				
			var currentYear = new Date(order[j].od_date).getFullYear ();
			var currentMonth = new Date(order[j].od_date).getMonth () + 1;
			var currentDate = new Date(order[j].od_date).getDate ();				
			var orderdate = currentYear+'-'+currentMonth+'-'+currentDate;
			product.orderDate = orderdate;				
			productsArray[j] = product;
		}
	}).on('success', function() {
			orderRecords.product = productsArray;                              
			callback(orderRecords);
	})
};