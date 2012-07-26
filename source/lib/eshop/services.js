/*
 * ###
 * PHR_NodeJSWebService
 * %%
 * Copyright (C) 1999 - 2012 Photon Infotech Inc.
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ###
 */
var fs = require('fs');
var path = require('path');
var db = require('./db');
var root = path.join(__dirname, '../../');
var resourcePath = root + 'public/resources/';
var utility = require('../utility');

exports.expose = function(app, serverConfig) {
    var context = serverConfig.context;
    var eshopRestApi = '/' + context + '/rest/api';
    var imagePath = '/' + context;
    var json = "";

    app.get('/' + context, function(req, res) {
        var html;
        try {
            var indexPath = root + 'views/eshop/index.html';
            html = fs.readFileSync(indexPath,'utf8'); 
        } catch (err) {
            console.log('Resource not found: ' + err);
        }

        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(html);
        res.end();
    });

    app.get(eshopRestApi + '/config', function(req, res){
        try {
            var configPath = resourcePath + 'app-config.json';
            json = fs.readFileSync(configPath,'utf8'); 
        } catch (err) {
            console.log('Resource not found: ' + err);
        }

        utility.sendJSONResponse(req, res, json);
    });
    
   app.get(eshopRestApi + '/categories', function(req, res){
        try {
            db.getCategories(req, res);
        } catch (err) {
            console.log('Resource not found: ' + err);
        }
    });
    
    app.get(eshopRestApi + '/categories/:category', function(req, res){
        try {
             db.getProducts(req, res, req.params.category);
        } catch (err) {
            console.log('Resource not found: ' + err);
        }
    });
    
    
    app.get(eshopRestApi + '/products', function(req, res){
        try {
             db.getAllProducts(req, res);
        } catch (err) {
            console.log('Resource not found: ' + err);
        }
    });
    

    app.get(eshopRestApi + '/products/:product', function(req, res){
        try {
             db.getProductdetails(req, res, req.params.product);
        } catch (err) {
            console.log('Resource not found: ' + err);
        }
    });
    
    
    
    app.get(eshopRestApi + '/newproducts', function(req, res){
        try {
             db.getNewProducts(req, res);
        } catch (err) {
            console.log('Resource not found: ' + err);
        }
    });
	app.get(eshopRestApi + '/specialproducts', function(req, res){
        try {
             db.getSpecialProducts(req, res);
        } catch (err) {
            console.log('Resource not found: ' + err);
        }
    });
	
    
    
    app.get(eshopRestApi + '/products/search/:searchtext', function(req, res){
        try {
             db.getSearchdetails(req, res, req.params.searchtext);
        } catch (err) {
            console.log('Resource not found: ' + err);
        }
    });
    
    

    app.get(eshopRestApi + '/products/:product/reviews', function(req, res){
        try {
           db.getReviews(req, res, req.params.product);
        } catch (err) {
            console.log('Resource not found: ' + err);
        }
    });
	
	
	app.get(eshopRestApi + '/products/orderhistory/:userid', function(req, res){
        try {
            db.getOrderhistroy(req, res, req.params.userid);
        } catch (err) {
            console.log('Resource not found: ' + err);
        }
    });


    app.get('*/images/*', function(req, res) {
        var index = req.url.indexOf('image');
        var imagePath = req.url.substr(index);

        fs.readFile(process.cwd() + '/public/eshop/assets/' + req.url.substr(index), "binary", function(error, file) {
            if(error) {
              res.writeHead(500, {"Content-Type": "text/plain"});
              res.write(error + "\n");
              res.end();
            } else {
              res.writeHead(200, {"Content-Type": "image/png"});
              res.write(file, "binary");
              res.end();
            }
        });
    });
	
	app.post(eshopRestApi + '/product/post/review', function(req, res){
		db.insertReviews(req, res);
    });
	
	app.post(eshopRestApi + '/post/login', function(req, res){
		db.getUser(req, res);
    });

	app.post(eshopRestApi + '/post/register', function(req, res){
		db.insertUser(req, res);
    });
	
	
	app.post(eshopRestApi + '/product/post/orderdetail', function(req, res){
		db.insertOrder(req, res);
    });
};