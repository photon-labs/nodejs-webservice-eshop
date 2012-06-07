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
    
    /* app.get(eshopRestApi + '/categories', function(req, res){
        try {
            //var configPath = resourcePath + 'categories.json';
            //json = db.getCategories(req, res);
            db.getCategories(req, res);
            //json = fs.readFileSync(configPath,'utf8'); 
        } catch (err) {
            console.log('Resource not found: ' + err);
        }
    }); */

    app.get(eshopRestApi + '/categories', function(req, res){
        try {
            //var configPath = resourcePath + 'categories.json';
            //json = db.getCategories(req, res);
            db.getCategories(req, res);
            //json = fs.readFileSync(configPath,'utf8'); 
        } catch (err) {
            console.log('Resource not found: ' + err);
        }
    });
    
    app.get(eshopRestApi + '/categories/:category', function(req, res){
        try {
           // var configPath = resourcePath + 'products.json';
            //json = fs.readFileSync(configPath,'utf8'); 
             db.getProducts(req, res, req.params.category);
        } catch (err) {
            console.log('Resource not found: ' + err);
        }
//        res.send(json);
    });
    
    
    app.get(eshopRestApi + '/products', function(req, res){
        try {
           // var configPath = resourcePath + 'products.json';
            //json = fs.readFileSync(configPath,'utf8'); 
             db.getAllProducts(req, res);
        } catch (err) {
            console.log('Resource not found: ' + err);
        }
//        res.send(json);
    });
    

    app.get(eshopRestApi + '/products/:product', function(req, res){
        try {
           // var configPath = resourcePath + 'products.json';
            //json = fs.readFileSync(configPath,'utf8'); 
             db.getProductdetails(req, res, req.params.product);
        } catch (err) {
            console.log('Resource not found: ' + err);
        }
//        res.send(json);
    });
    
    
    
    app.get(eshopRestApi + '/newproducts', function(req, res){
        try {
           // var configPath = resourcePath + 'products.json';
            //json = fs.readFileSync(configPath,'utf8'); 
             db.getNewProducts(req, res);
        } catch (err) {
            console.log('Resource not found: ' + err);
        }
//        res.send(json);
    });
	app.get(eshopRestApi + '/specialproducts', function(req, res){
        try {
           // var configPath = resourcePath + 'products.json';
            //json = fs.readFileSync(configPath,'utf8'); 
             db.getSpecialProducts(req, res);
        } catch (err) {
            console.log('Resource not found: ' + err);
        }
//        res.send(json);
    });
	
    
    
    app.get(eshopRestApi + '/products/search/:searchtext', function(req, res){
        try {
           // var configPath = resourcePath + 'products.json';
            //json = fs.readFileSync(configPath,'utf8'); 
             db.getSearchdetails(req, res, req.params.searchtext);
        } catch (err) {
            console.log('Resource not found: ' + err);
        }
//        res.send(json);
    });
    
    

    app.get(eshopRestApi + '/products/:product/reviews', function(req, res){
        try {
          // var configPath = resourcePath + 'reviews.json';
           //json = fs.readFileSync(configPath,'utf8');
           db.getReviews(req, res, req.params.product);
        } catch (err) {
            console.log('Resource not found: ' + err);
        }
    });
	
	
	app.get(eshopRestApi + '/products/orderhistory/:userid', function(req, res){
        try {
          // var configPath = resourcePath + 'reviews.json';
           //json = fs.readFileSync(configPath,'utf8');
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
    //app.get(eshopRestApi + '/product/post/review', function(req, res){
       // console.info('Request body = ', req.body);
		db.insertReviews(req, res);
        //res.send(req.body);
    });
	
	app.post(eshopRestApi + '/post/login', function(req, res){
        //console.info('Request body = ', req.body);
		db.getUser(req, res);
        //res.send(req.body);
    });

	app.post(eshopRestApi + '/post/register', function(req, res){
        //console.info('Request body = ', req.body);
		db.insertUser(req, res);
        //res.send(req.body);
    });
	
	
	app.post(eshopRestApi + '/product/post/orderdetail', function(req, res){
        //console.info('Request body = ', req.body);
		db.insertOrder(req, res);
        //res.send(req.body);
    });
}