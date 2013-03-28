var exception = require('../../exception');
var dbconfigure = require('../dbconfigure');
var utility = require('../../utility');
var Sequelize = require("sequelize");
var sequelize = dbconfigure.getSequelize();
var path = require('path');

var Review = sequelize.import(path.normalize(__dirname + "/../models/Review"));
var Product = sequelize.import(path.normalize(__dirname + "/../models/Product"));

exports.retrieveProductdetails = function(productId, callback) {
    var totalcount="";
    var jsonStr = "";
    var productsArray = new Array();
    var productsRecords = {};
    Product.findAll({where: ["id = ?", productId]}).on('success', function(products) {
		try {
			for (var i = 0; i < products.length; i++) {
				var product = {};
			   
				product.id = products[i].id;
				product.name = products[i].pd_name;
				product.category = products[i].cat_id;
				product.model = products[i].pd_model;
				product.specialProduct = products[i].pd_special;            
				product.listPrice = products[i].pd_list_price;
				product.sellPrice = products[i].pd_sell_price;
				product.description = products[i].pd_description;
				product.image = products[i].pd_img;
				product.detailImage = products[i].pd_det_img;
				productsArray[i] = product;
			}
		} catch (e) {
			//exception.executeException(0, '1000', "failed during product details");
	  	}
    }).on('success', function() {
        var chainer = new Sequelize.Utils.QueryChainer
        var ratingIdList = new Array();
        var reviewsObjs = new Array();
        var reviewArray = new Array();
        var review = {};
        var ratingString;
        var ratingrecordArray = new Array();

        var totalCount = 0;
            var j = 0;
            var ratingCountString;
            var rating;
            chainer.add(
                Review.count({where: {rating: [1,2,3,4,5], pd_id: productId}}).on('success', function(ratingCount) {
                    totalCount = ratingCount;
					totalCount = (totalCount > 25)? (totalCount /2) : totalCount;
                    var average = (totalCount / 5);
                    rating = Math.round(average);
                })
            )
            chainer.run().on('success', function() {
                var product;
                for (var p1 = 0; p1 < productsArray.length; p1++) {
                    product = productsArray[p1];
                    product.rating = rating;
                    productsArray[p1] = product;
                }
                if (product ==  undefined) {
                    exception.executeException(0, '1001', 'Product id unavailable');
                } else {
                    var details = {"TV Type": "LCD", "Screen Size": "32' Inches", "Screen Ratio": "16:9", "TV Definition": "HDTV"};
                    product.details = details;
                    productsRecords.product = productsArray;
					callback(productsRecords);
                }
            }).on('failure', function(err){
                //exception.executeException(0, '1000', err);   
            })
                
        }).on('failure', function(err) {
            //exception.executeException(0, '1000', err);
        })
};