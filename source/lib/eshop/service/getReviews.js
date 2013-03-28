var exception = require('../../exception');
var dbconfigure = require('../dbconfigure');
var utility = require('../../utility');
var Sequelize = require("sequelize");
var sequelize = dbconfigure.getSequelize();
var path = require('path');

var Product = sequelize.import(path.normalize(__dirname + "/../models/Product"));
var Review = sequelize.import(path.normalize(__dirname + "/../models/Review"));
var User = sequelize.import(path.normalize(__dirname + "/../models/User"));
User.hasMany(Review,{foreignKey: 'user_id', as: "Reviews"});

exports.retrieveReviews = function(productId, callback) {
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
            callback(reviewRecords);
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
                                callback(reviewRecords);
                            })
                        })
                    )
                }).on('failure', function(err) {
                    //exception.executeException(0, '1000', err, res);
                })
        }

    }).on('failure', function(err) {
        //exception.executeException(0, '1000', err, res);
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
        callback(reviewRecords);
	   }
	})
}