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
	
	app.post(eshopRestApi + '/post/login', function(req, res, callback){
		db.getUser(req, res, callback);
    });

	app.post(eshopRestApi + '/post/register', function(req, res, callback){
		db.insertUser(req, res, callback);
    });
    
    app.get(eshopRestApi + '/categories', function(req, res, callback){
        try {
            db.getCategories(req, res, callback);
        } catch (err) {
            console.log('Resource not found: ' + err);
        }
    });
    
    app.get(eshopRestApi + '/categories/:category', function(req, res, callback){
        try {
            db.getProducts(req, res, req.params.category, callback);
        } catch (err) {
            console.log('Resource not found: ' + err);
        }
    });
    
    
    app.get(eshopRestApi + '/products', function(req, res, callback){
        try {
            db.getAllProducts(req, res, callback);
        } catch (err) {
            console.log('Resource not found: ' + err);
        }
    });
    

    app.get(eshopRestApi + '/products/:product', function(req, res, callback){
        try {
            db.getProductdetails(req, res, req.params.product, callback);
        } catch (err) {
            console.log('Resource not found: ' + err);
        }
    });
    
    
    app.get(eshopRestApi + '/newproducts', function(req, res, callback){
        try {
            db.getNewProducts(req, res, callback);
        } catch (err) {
            console.log('Resource not found: ' + err);
        }
    });
	
	app.get(eshopRestApi + '/specialproducts', function(req, res, callback){
        try {
             db.getSpecialProducts(req, res, callback);
        } catch (err) {
            console.log('Resource not found: ' + err);
        }
    });
	
    app.get(eshopRestApi + '/products/search/:searchtext', function(req, res, callback){
        try {
             db.getSearchdetails(req, res, req.params.searchtext, callback);
        } catch (err) {
            console.log('Resource not found: ' + err);
        }
    });
    
    app.get(eshopRestApi + '/products/:product/reviews', function(req, res, callback){
        try {
           db.getReviews(req, res, req.params.product, callback);
        } catch (err) {
            console.log('Resource not found: ' + err);
        }
    });
	
	app.post(eshopRestApi + '/product/post/review', function(req, res, callback){
		db.insertReviews(req, res, callback);
    });
	
	app.post(eshopRestApi + '/product/post/orderdetail', function(req, res, callback){
		db.insertOrder(req, res, callback);
    });
	
	app.get(eshopRestApi + '/products/orderhistory/:userid', function(req, res, callback){
        try {
           db.getOrderhistroy(req, res, req.params.userid, callback);
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
};