var exception = require('../../exception');
var dbconfigure = require('../dbconfigure');
var utility = require('../../utility');
var Sequelize = require("sequelize");
var sequelize = dbconfigure.getSequelize();
var path = require('path');

var EshopCategory = sequelize.import(path.normalize(__dirname + "/../models/Category"));
var Product = sequelize.import(path.normalize(__dirname + "/../models/Product"));
EshopCategory.hasMany(Product, { foreignKey: 'cat_id', as: "Products" });
var Review = sequelize.import(path.normalize(__dirname + "/../models/Review"));

exports.retrieveProducts = function(categoryId, callback) {
    var productsArray = new Array();
    var productsRecords = {};
	
	if (isNaN(categoryId)) {
		//exception.executeException(0, '1001', 'Category id invalid', res);
	} else {
		EshopCategory.find(parseInt(categoryId)).on('success', function(category) {
        if (category != null) {
            category.getProducts().on('success', function(products) {
              for (var i = 0; i < products.length; i++) {
                var product = {};
                // TODO Rating hardcode
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
            }).on('success', function() {
                var chainer = new Sequelize.Utils.QueryChainer
                var ratingIdList = new Array();
                var reviewsObjs = new Array();
                var reviewArray = new Array();
                var review = {};
                var ratingString;
                var ratingrecordArray = new Array();
                
                var rating = {};
                var totalCount = 0;
                for (var p = 0; p < productsArray.length; p++) {
                    var j = 0;
                    var ratingCountString;
                    var ratingArray = new Array();
                    chainer.add(
                        Review.count({where: {rating: [1,2,3,4,5], pd_id: productsArray[p].id}}).on('success', function(ratingCount) {
                            totalCount = ratingCount;
							totalCount = (totalCount > 25)? (totalCount /2) : totalCount;
                            var average = (totalCount / 5);
                            ratingArray[j] = Math.round(average);
                            j++
                        })
                    )
                    chainer.run().on('success', function() {
                        var avgRating = {};
                        avgRating.rating =  ratingArray;
                        for (var p1 = 0; p1 < productsArray.length; p1++) {
                            var product = productsArray[p1];
                            product.rating = ratingArray[p1];
                            productsArray[p1] = product;
                        }
                        //console.info(productsArray);
                        productsRecords.product = productsArray
                        callback(productsRecords);
                    })
                }
            }).on('failure', function(err){
               // exception.executeException(0, '1000', err, res);   
            })
        } else {
            //exception.executeException(0, '1001', 'Category id unavailable', res);   
        }
    })
    .on('failure', function(err){
            //exception.executeException(0, '1000', err, res);   
        })
	}
};