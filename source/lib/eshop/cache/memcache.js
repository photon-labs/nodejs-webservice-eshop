var memcache = require('memcache');
var port = 1030;
var host = 'localhost';


module.exports = function() {
	var client = new memcache.Client(port, host);
	client.port = '1030';
	client.host = 'localhost';


	client.on('connect', function(){
	    // no arguments - we've connected
	    console.info('connected');
	});

	client.on('close', function(){
	    // no arguments - connection has been closed
	    console.info('close');
	});

	client.on('timeout', function(){
	    // no arguments - socket timed out
	    console.info('timeout');
	});

	client.on('error', function(e){
	    // there was an error - exception is 1st argument
	    console.info('error');
	});

	// connect to the memcache server after subscribing to some or all of these events
	client.connect();

	return client;
}