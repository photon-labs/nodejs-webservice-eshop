var exception = require('../../exception');
var dbconfigure = require('../dbconfigure');
var utility = require('../../utility');
var Sequelize = require("sequelize");
var sequelize = dbconfigure.getSequelize();
var path = require('path');

var Product = sequelize.import(path.normalize(__dirname + "/../models/Product"));
var EshopCategory = sequelize.import(path.normalize(__dirname + "/../models/Category"));

exports.retrieveCategories = function(callback) {											
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
                callback(categoryRecords);
            })
          }
        }).on('failure', function(err){
                //exception.executeException(0, '1000', err, res);   
            })
}