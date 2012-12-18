var dbconfigure = require('../lib/eshop/dbconfigure');
dbconfigure.configure('Production');
var search = require('../lib/eshop/service/search.js');
assert = require("assert");

describe("Testing Search Service", function() {
	it("With Matched Keyword", function(done){
		var keyword = "mobile"; 
		var searchJson = {"product":[{"id":30,"name":"Motorola DEFY ","category":3,"model":"1030.0","specialProduct":0,"listPrice":286,"sellPrice":280,"description":"The Motorola Defy is a full touch phone that runs on Android OS 2.1 - Eclair. The mobile phone has a TI OMAP 3610 800 MHz processor with 512 MB RAM. The Defy is a sturdy phone with dustproof, water and scratch resistant features.Imaging and video is taken","image":"product/sony_mobile_30.png","detailImage":"product/details/sony_mobile_30.png","rating":0},{"id":51,"name":"Acer\n16GB Iconia Tab A500 10.1\" Multi-Touch Screen Tablet","category":6,"model":"1051.0","specialProduct":0,"listPrice":382,"sellPrice":349.99,"description":"NVIDIA Tegra 250 Dual-Core Processor \nActive Matrix 10.1\" TFT Color LCD Screen \nWidescreen HD WXGA 1280 x 800 Resolution \nDDR2 SDRAM 1GB Memory & 16GB of Storage \nAndroid 3.0 Honeycomb Operating System \nWiFi 802.11 b/g/n & Bluetooth Enabled \nMicro-HDMI & High-Speed USB 2.0 Port \nFront 2MP Camera & Back 5MP Camera \nNVIDIA GeForce Graphics \nDual Speakers & Dolby Mobile Technology .\nThe Acer 16GB Iconia Tab A500 10.1\" Multi-Touch Screen Tablet is an ultra-portable tablet equipped with a high-definition 10.1\" Active Matrix TFT color LCD display with cinematic WXGA 1280 x 800 resolution. It runs the Android 3.0 Honeycomb operating system with an NVIDIA Tegra 250 dual-core processor capable of a 1.0GHz processing speed. It supports NVIDIA GeForce graphics and has an internal 1GB DDR2 SDRAM memory, as well as 16GB of storage capacity that can be expanded by utilizing the MicroSD/SDHC card slot.\n\n\n","image":"product/acer_tablet_51.png","detailImage":"product/details/acer_tablet_51.png","rating":0},{"id":52,"name":"Acer\n8GB Iconia Tab A100 VanGogh 7.0\" Multi-Touch Tablet PC (Steel Blue) ","category":6,"model":"1052.0","specialProduct":0,"listPrice":321,"sellPrice":299.99,"description":"nVidia Tegra 250 Dual-Core 1.0GHz CPU \nActive Matrix 7.0\" TFT Color LCD Screen \nWXGA 1024 x 600 HD Resolution \nInternal 8GB Storage & 1GB DDR2 SDRAM \nWiFi 802.11 b/g/n & Bluetooth 2.1 + EDR \nAndroid Honeycomb Operating System Brilliant nVidia GeForce Graphics Micro HDMI Port & Micro USB 2.0 Port Dolby Mobile Technology & Dual Speakers MicroSD & MicroSDHC Memory Card Reader \nThe Acer 8GB Iconia Tab A100 VanGogh 7.0\" Multi-Touch Tablet PC (Steel Blue) is an ultra-portable tablet equipped with a high-definition 7.0\" Active Matrix TFT color LCD multi-touch display that supports cinematic WXGA 1024 x 600 resolution. It features an Android Honeycomb operating system, nVidia Tegra 250 Dual-Core 1.0GHz mobile processor and stunning nVidia GeForce graphics. The A100 utilizes a generous 1GB of DDR2 SDRAM internal memory to ensure fast computing. For storing documents and media, the tablet features a sufficient 8GB storage capacity, which can easily be expanded by taking advantage of the integrated MicroSD/MicroSDHC memory card slot.\n\n","image":"product/acer_tablet_52.png","detailImage":"product/details/acer_tablet_52.png","rating":0}]};
		search.retrieveSearchdetails(keyword, function(searchdata){
			assert.deepEqual(JSON.stringify(searchJson), JSON.stringify(searchdata), "Search Success");
		});	
		setTimeout(done, 100);
	}); 
});

describe("Testing Search Service", function() {
	it("With Incorrect Keyword", function(done){
		var keyword = "json"; 
		var searchJson = {"successMessage":"no item found"};
		search.retrieveSearchdetails(keyword, function(searchdata){
			assert.deepEqual(JSON.stringify(searchJson), JSON.stringify(searchdata), "Search Failure");
		});	
		setTimeout(done, 100);
	}); 
});