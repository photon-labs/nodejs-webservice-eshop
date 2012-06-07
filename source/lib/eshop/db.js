var exception = require('../exception');
var dbconfigure = require('./dbconfigure');
var utility = require('../utility');
var Sequelize = require("sequelize");

//console.info('Host = ', utility.getDBHost());
var sequelize = dbconfigure.getSequelize();
var EshopCategory = sequelize.import(__dirname + "/models/Category")
var Product = sequelize.import(__dirname + "/models/Product")
var Review = sequelize.import(__dirname + "/models/Review")
var User = sequelize.import(__dirname + "/models/User")
var Order = sequelize.import(__dirname + "/models/Order")
var Orderitem = sequelize.import(__dirname + "/models/Orderitem")


//EshopCategory.hasMany(Product, { foreignKey: 'cat_id', as: "Products" });
//User.hasMany(Review,{foreignKey: 'user_id', as: "Reviews"});
EshopCategory.hasMany(Product, { foreignKey: 'cat_id', as: "Products" });



/* 
 * Service methods
 *
 */
exports.getCategories = function(req, res) {
    var categoriesArray = new Array();
    var categoriesIdList = new Array();
    var categoriesObjs = new Array();
    var categoryRecords = {};
    EshopCategory.findAll().on('success', function(categories) {
        for (var i = 0; i < categories.length; i++) {
            var categoryId = categories[i].cat_id;
            categoriesIdList[i] = categoryId;
            categoriesObjs[i] = categories[i];
        }
    }).on('success', function() {
         var chainer = new Sequelize.Utils.QueryChainer
         var productCountArrray = new Array()
          for (var i = 0; i < categoriesIdList.length; i++) {
              var categoryId = categoriesObjs[i].id;
              var j = 0;
              chainer.add(
                    Product.count({where: ["cat_id = ?", categoryId]}).on('success', function(productCount) {
                        var category = {};
                        category.id = categoriesObjs[j].id;
                        category.name = categoriesObjs[j].cat_name;
                        category.image = categoriesObjs[j].cat_image;
                        category.detailsImage = categoriesObjs[j].cat_image;
                        category.productCount = productCount;
                        categoriesArray[j] = category;
                        j++;
                    })
                )
              chainer.run().on('success', function(){
                categoryRecords.category = categoriesArray;                              
                jsonStr = JSON.stringify(categoryRecords, null, '\t'); 
                utility.sendJSONResponse(req, res, jsonStr);
            })
          }
        }).on('failure', function(err){
                exception.executeException(0, '1000', err, res);   
            })
}

exports.getProducts = function(req, res, categoryId) {
    var productsArray = new Array();
    var productsRecords = {};
	
	if (isNaN(categoryId)) {
		exception.executeException(0, '1001', 'Category id invalid', res);
	}
	else{
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
                        jsonStr = JSON.stringify(productsRecords, null, '\t'); 
                        utility.sendJSONResponse(req, res, jsonStr);
                    })
                }
            }).on('failure', function(err){
                exception.executeException(0, '1000', err, res);   
            })
        } else {
            exception.executeException(0, '1001', 'Category id unavailable', res);   
        }
    })
    .on('failure', function(err){
            exception.executeException(0, '1000', err, res);   
        })
	}
}


exports.getAllProducts = function(req, res) {
    var productsArray = new Array();
    var productsRecords = {};
    Product.findAll().on('success', function(products) {
              for (var i = 0; i < products.length; i++) {
                var product = {};
                // TODO Rating hardcode
                product.id = products[i].id;
                product.name = products[i].pd_name;
                product.category = products[i].cat_id;
                product.model = products[i].pd_model;
                product.specialProduct = products[i].pd_special;
                product.newPrdouct = products[i].pd_new;
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
                        jsonStr = JSON.stringify(productsRecords, null, '\t');  
                        utility.sendJSONResponse(req, res, jsonStr);
                    })
                }
            }).on('failure', function(err){
                exception.executeException(0, '1000', err, res);   
            })
}



exports.getNewProducts = function(req, res) {
    var productsArray = new Array();
    var productsRecords = {};
    Product.findAll({where: ["pd_new = ?", 1]}).on('success', function(products) {
              for (var i = 0; i < products.length; i++) {
                var product = {};
               
                product.id = products[i].id;
                product.name = products[i].pd_name;
                product.category = products[i].cat_id;
                product.model = products[i].pd_model;
                product.specialProduct = products[i].pd_special;
                product.newPrdouct = products[i].pd_new;
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
                        jsonStr = JSON.stringify(productsRecords, null, '\t');  
                        utility.sendJSONResponse(req, res, jsonStr);
                    })
                }
            }).on('failure', function(err){
                exception.executeException(0, '1000', err, res);   
            })
}


exports.getSpecialProducts = function(req, res) {
    var productsArray = new Array();
    var productsRecords = {};
    Product.findAll({where: ["pd_special = ?", 1]}).on('success', function(products) {
              for (var i = 0; i < products.length; i++) {
                var product = {};
               
                product.id = products[i].id;
                product.name = products[i].pd_name;
                product.category = products[i].cat_id;
                product.model = products[i].pd_model;
                product.specialProduct = products[i].pd_special;
                product.newPrdouct = products[i].pd_new;
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
                        jsonStr = JSON.stringify(productsRecords, null, '\t');  
                        utility.sendJSONResponse(req, res, jsonStr);
                    })
                }
            }).on('failure', function(err){
                exception.executeException(0, '1000', err, res);   
            })
}




exports.getProductdetails = function(req, res, productId) {
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
			exception.executeException(0, '1000', "failed during product details", res);
	  	}
        //res.json(jsonStr);
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
                    exception.executeException(0, '1001', 'Product id unavailable', res);
                } else {
                    var details = {"TV Type": "LCD", "Screen Size": "32' Inches", "Screen Ratio": "16:9", "TV Definition": "HDTV"};
                    product.details = details;
                    //console.info(productsArray)
                    productsRecords.product = productsArray
                    jsonStr = JSON.stringify(productsRecords, null, '\t'); 
                    utility.sendJSONResponse(req, res, jsonStr);
                }
            }).on('failure', function(err){
                exception.executeException(0, '1000', err, res);   
            })
                
        }).on('failure', function(err) {
            exception.executeException(0, '1000', err, res);
        })
}


exports.getSearchdetails = function(req, res, searchword) {
    var totalcount="";
    var jsonStr = "";
    var productsArray = new Array();
    var productsRecords = {};
        Product.findAll({where: 'pd_name like "%'+searchword+'%" or pd_description like "%'+searchword+'%"' }).on('success', function(products) {    
		if(products.length != 0){																													  
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
		}
		else {
			//exception.executeException(0, '2000', "no item found", res);
			var message = {}
			message.successMessage = "no item found";
			var searchMessage = JSON.stringify(message, null, '\t')
            utility.sendJSONResponse(req, res, searchMessage);
	  	}
        //res.json(jsonStr);
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
                        jsonStr = JSON.stringify(productsRecords, null, '\t');  
                        utility.sendJSONResponse(req, res, jsonStr);
                    })
                }
            }).on('failure', function(err){
                exception.executeException(0, '1000', err, res);   
            })
}
    
exports.getReviews = function(req, res, productId) {
    var reviewRecords = {};
    var chainer = new Sequelize.Utils.QueryChainer
    var ratingIdList = new Array();
    var reviewsObjs = new Array();
    var reviewArray = new Array();
    var review = {};
    review.productId = productId;
    review.userId = 1;
	
   Product.find({where: {id: productId}}).on('success', function(products) {
	if(products != null) {
    Review.findAll({where: ["pd_id = ? ", productId]}).on('success', function(reviews) {
        if ( reviews.length > 0){
            for (var i = 0; i < reviews.length; i++) {
                var ratingId = reviews[i].rating;
                ratingIdList[i] = ratingId;
                reviewsObjs[i] = reviews[i];
            }
        } else {
            var commentsArray = new Array();
            //var commentJson = {};
			/*commentJson.rating = ""
            commentJson.comment = "";
			commentJson.userid = "";
			commentJson.commentDate = "";
            commentJson.user = "";
            commentsArray[0]= "";
            var comments = {};*/
			var ratingArray = new Array();
			 for (var r = 0; r < 5; r++) {
				var ratingSeries = {};
				var ratingKeyValue = {};
				ratingKeyValue.key  = r + 1;
				ratingKeyValue.value  = 0;
				ratingArray[r] = ratingKeyValue;
			 }
			var ratings = {};
			ratings.rating = ratingArray;
			review.ratings = ratings;
			review.average = 0;
            review.comments = commentsArray;
            reviewRecords.review = review;
            //exception.executeException(0, '1001', 'Product reviews is not available', res);   
            var reviewJson = JSON.stringify(reviewRecords, null, '\t')
            utility.sendJSONResponse(req, res, reviewJson);
       }
    }).on('success', function() {
        var ratingString;
        var ratingrecordArray = new Array();
        var j = 0;
        var rating = {};
        var totalCount = 0;

        for (var i = 1; i <= 5; i++) {
            var ratingId = i;
            var k = 1;
            var ratingCountString;
            var ratingArray = new Array();
            chainer.add(
                Review.count({where: {rating: ratingId, pd_id: productId}}).on('success', function(ratingCount) {
                    var ratingSeries = {};
                    var ratingKeyValue = {};
                    ratingKeyValue.key  = k;
                    ratingKeyValue.value  = ratingCount;
                    //ratingSeries="{ keys :"+ k + ",values :" + ratingCount +"}";
                    totalCount += ratingCount;
                    ratingArray[j] = ratingKeyValue;
                    j++  
                    k++// display rating id
                })
            )
            chainer.run().on('success', function() {
                    var commentsChainer = new Sequelize.Utils.QueryChainer
                    var commentsArray = new Array();
                    var ratings = {};
                    ratings.rating = ratingArray;
                    review.ratings = ratings;
                    review.average = Math.round((totalCount / 5));
                    var usernameArray = new Array();
                    var userIdList = new Array();
                    var now = new Date();
                    commentsChainer.add(
                        Review.findAll({where: ["pd_id = ?", productId]}).on('success', function(reviewRecord) {
                            for(var m = 0; m < reviewRecord.length; m++){
                                var comment = {};
                                comment.rating = reviewRecord[m].rating;
                                comment.comment = reviewRecord[m].comment;
                                comment.userid = reviewRecord[m].user_id;
                                userIdList[m] = reviewRecord[m].user_id;
                                var commentDate = reviewRecord[m].comment_date;
                                var currentYear = new Date(commentDate).getFullYear ();
                                var currentMonth = new Date(commentDate).getMonth () + 1;
                                var currentDate = new Date(commentDate).getDate ();
                                
                                var currentHours = commentDate.getHours ( );
                                var currentMinutes = commentDate.getMinutes ( );
                                var currentSeconds = commentDate.getSeconds ( );
                                currentHours = ( currentHours >= 10 ) ? currentHours : "0"+currentHours;
                                currentMinutes = ( currentMinutes >= 10) ? currentMinutes : "0"+ currentMinutes;
                                currentSeconds = ( currentSeconds >= 10) ? currentSeconds : "0"+ currentSeconds;
                                //console.info(currentYear+'-'+currentMonth+'-'+currentDate+' '+currentHours+':'+currentMinutes+':'+currentSeconds);
                                comment.commentDate = currentYear+'-'+currentMonth+'-'+currentDate+' '+currentHours+':'+currentMinutes+':'+currentSeconds;
                                //comment.commentDate = dateFormat(reviewRecord[m].comment_date, "yyyy-mm-dd HH:MM:ss")
                                commentsArray[m] = comment;
                            }
                        }).on('success', function(err) {
                           var userId = new Array();
                           for (var z = 0; z < userIdList.length; z++){
                               userId.push(userIdList[z]);
                           }
                           //var users = {};
                            User.findAll({where: {id: userId }}).on('success', function(usersdata) {
                                for (var u = 0; u < usersdata.length; u++){
                                    var username = usersdata[u].first_name + ' ' + usersdata[u].last_name;
                                    usernameArray[usersdata[u].id] = username;
                                }
                                for (var p1 = 0; p1 < commentsArray.length; p1++) {
                                    var comment = commentsArray[p1];
                                    comment.user =  usernameArray[commentsArray[p1].userid];
                                    commentsArray[p1] = comment;
                                }
                                var comments = {};
                                review.comments = commentsArray;
                                reviewRecords.review = review
                                var reviewJson = JSON.stringify(reviewRecords, null, '\t')
                                utility.sendJSONResponse(req, res, reviewJson);
                            })
                        })
                    )
                }).on('failure', function(err) {
                    exception.executeException(0, '1000', err, res);
                })
        }

    }).on('failure', function(err) {
        exception.executeException(0, '1000', err, res);
    })
	}
	else {
		var commentsArray = new Array();
		 var commentJson = {};
			commentJson.comment = 'Not available...';
			commentJson.user = 'Review';
		commentsArray[0]= commentJson;
		var comments = {};
		review.comments = commentsArray;
		reviewRecords.review = review;
		//exception.executeException(0, '1001', 'Product reviews is not available', res);   
		var reviewJson = JSON.stringify(reviewRecords, null, '\t')
        utility.sendJSONResponse(req, res, reviewJson);
	   }
	})
	
    
}

exports.insertReviews = function(req, res) {
    var data = req.body;
    //console.info("json data",data);
    var productId = data.review.productId;
    var userId = data.review.userId;
    var rating = data.review.rating;
    var comment = data.review.comment;
    var commentDate = data.review.commentDate;
	console.info('productId = ', productId);
    Review.build({ pd_id: productId, user_id: userId, comment: comment, rating:rating, comment_date: commentDate })
    .save().on('success', function() {
	//	console.info('save');
		var message = {};
		message.successMessage = "Success";
		var reviewMessage = JSON.stringify(message, null, '\t')
		utility.sendJSONResponse(req, res, reviewMessage);
    })
    .on('failure', function(err) {
		//console.info('err = ', err);
        var message = {};
        message.successMessage = "Failed";
/*        var registerMessage = JSON.stringify(message, null, '\t')
        utility.sendJSONResponse(req, res, registerMessage);
        exception.executeException(0, '1000', err, res);
*/    
		var reviewMessage = JSON.stringify(message, null, '\t')
		utility.sendJSONResponse(req, res, reviewMessage);
	})
    
}

exports.getUser = function(req, res) {
    var data = req.body;
    var email = data.login.loginEmail;
    var password = data.login.password;
    User.count({ where: {email: email, password: password} }).on('success', function(user) {
        }).on('success', function(user) {
            var message = {};
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
                    var loginMessage = JSON.stringify(message, null, '\t')
                    utility.sendJSONResponse(req, res, loginMessage);
                })
        })
}


exports.getOrderhistroy = function(req, res, userId) {
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
				jsonStr = JSON.stringify(orderRecords, null, '\t'); 
                utility.sendJSONResponse(req, res, jsonStr);
			})
}

exports.insertUser = function(req, res) {   
    var data = req.body;
    var firstname = data.register.firstName;
    var lastname = data.register.lastName;
    var email = data.register.email;
    var password = data.register.password;
    var phoneNumber = data.register.phoneNumber;
        User.count({ where: {email: email} }).on('success', function(user) {
        }).on('success', function(user) {
            var message = {};
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
                    var registerMessage = JSON.stringify(message, null, '\t')
                    utility.sendJSONResponse(req, res, registerMessage);
                })
                })
            }
            else{
                message.message = "Already exist";
                message.userId = "0";
                message.successMessage = "Failed";
                var registerMessage = JSON.stringify(message, null, '\t')
                utility.sendJSONResponse(req, res, registerMessage);
            }
            
        })
}

exports.insertOrder = function(req, res) {
    var data = req.body;
	//console.info("checkout details data", data );
    var products = data.products;
    var firstName = data.customerInfo.billingAddress.firstName;
    var lastName = data.customerInfo.billingAddress.lastName;
    var address1 = data.customerInfo.billingAddress.address1;
    var address2 = data.customerInfo.billingAddress.address2;
    var city = data.customerInfo.billingAddress.city;
    var postcode = data.customerInfo.billingAddress.postcode;
	var comments = data.comments;
	var userId = data.userId;
	var totalPrice = data.totalPrice;
	var totalItem = data.totalItem;
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
						var registerMessage = JSON.stringify(message, null, '\t')
                        utility.sendJSONResponse(req, res, registerMessage);
                    })
             )
            chainer.run().on('success', function() { 
            })
    })
    .on('failure', function(err) {
        exception.executeException(0, '1000', err, res);
    })
}


