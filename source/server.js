var utility = require('./lib/utility');
var configure = require('./lib/eshop/configure');
var logger = require('./lib/logger');
var http = require("http");
var dbconfigure = require('./lib/eshop/dbconfigure');
var currentEnv = process.argv[2];
dbconfigure.configure(currentEnv);
var services = require('./lib/eshop/services');
var db = require('./lib/eshop/db');

var serverConfig = utility.getConfigByName(currentEnv, 'Server');
require('dns').lookup(require('os').hostname(), function (err, address, fam) {
	var ipaddress = address;
	if (ipaddress === serverConfig.host || serverConfig.host === "localhost" && serverConfig.protocol === "http") {
		var app = require('express').createServer();
		configure.appConfigure(app);
		services.expose(app, serverConfig);
		app.listen(serverConfig.port);
		 var serverUrl = serverConfig.protocol + '://' + serverConfig.host 
		+ ':' + serverConfig.port  + '/' + serverConfig.context;
		console.log('Server running at ' + serverUrl);
	} else {
		  console.log("Server startup failed");
		  console.log("Invaldid IP Address is Configured");		
	}
});
