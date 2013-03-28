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