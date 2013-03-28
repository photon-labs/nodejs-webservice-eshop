var exception = require('../../exception');
var dbconfigure = require('../dbconfigure');
var utility = require('../../utility');
var Sequelize = require("sequelize");
var sequelize = dbconfigure.getSequelize();
var path = require('path');

var Order = sequelize.import(path.normalize(__dirname + "/../models/Order"));
var Orderitem = sequelize.import(path.normalize(__dirname + "/../models/Orderitem"));

exports.postOrder = function(products, firstName, lastName, address1, address2, city, postcode, comments, userId, totalPrice, totalItem, callback) {
    
	if(userId == undefined){
		var userId = 0;
	}
    //var phonenumber = data.billingAddress.phonenumber;
    var currentTime = new Date()
    var month = currentTime.getMonth() + 1
    var month = month < 10 ? "0" + month : month;
    var day = currentTime.getDate()
    var day = day < 10 ? "0" + day : day;
    var year = currentTime.getFullYear()
    now = year + "-" + month + "-" + day;
    
    Order.build({od_date: now, od_last_update: now, userid: userId, od_shipping_first_name: firstName, od_shipping_last_name: lastName, od_shipping_address1: address1, od_shipping_address2:address2, od_shipping_city: city , od_shipping_postal_code: postcode, od_shipping_cost: 000,od_payment_first_name: firstName, od_payment_last_name: lastName, od_payment_address1: address1, od_payment_address2:address2, od_payment_city: city , od_payment_postal_code: postcode, od_comments: comments, od_totalqty: totalItem, od_totalprice: totalPrice })
    .save().on('success', function() {
		    var chainer = new Sequelize.Utils.QueryChainer    
		    chainer.add(
			  Order.findAll({order: 'id DESC', limit: 1}).on('success', function(orderdata) {
				}).on('success', function(orderId) {
					for (var i = 0; i < orderId.length; i++) {
						var orderId = orderId[i].id;
					}
					 for (var p = 0; p < products.length; p++) {
						var productId = products[p].productId;
						var quantity = products[p].quantity;
						var price = products[p].totalPrice;
						Orderitem.build({id: orderId, pd_id: productId, od_qty: quantity })
						.save().on('success', function() {
					   
						})
					}
					var message = {};
					message.message = "Inserted";
					message.orderId = orderId;
					message.successMessage = "Success";
					callback(message);
				})
		    )
		chainer.run().on('success', function() { 
		})
    })
    .on('failure', function(err) {
        //exception.executeException(0, '1000', err, res);
    })
};