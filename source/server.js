var utility = require('./lib/utility');
var configure = require('./lib/eshop/configure');

var logger = require('./lib/logger');
var http = require("http");
var dbconfigure = require('./lib/eshop/dbconfigure');
var currentEnv = process.argv[2];
dbconfigure.configure(currentEnv);

var services = require('./lib/eshop/services');
var db = require('./lib/eshop/db');
//var Memcached = require('memcached');

var serverConfig = utility.getConfigByName(currentEnv, 'Server');
var app = require('express').createServer();
configure.appConfigure(app);
services.expose(app, serverConfig);

app.listen(serverConfig.port);

var options = {
  host: serverConfig.host,
  port: serverConfig.port,
  path: '/' + serverConfig.context
};

http.get(options, function(res) {
  if (res.statusCode == 200) {
    //console.log("success");
	 var serverUrl = serverConfig.protocol + '://' + serverConfig.host 
	+ ':' + serverConfig.port  + '/' + serverConfig.context;
	console.log('Server running at ' + serverUrl);
  }
}).on('error', function(e) {
  //console.log("Got error: " + e.message);
  console.log("Invaldid IP Address is Configured");
});