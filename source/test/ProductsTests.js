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
var dbconfigure = require('../lib/eshop/dbconfigure');
dbconfigure.configure('Production');
var products = require('../lib/eshop/service/products.js');
assert = require("assert");

describe("Testing Products Service", function() {
	it("With CategoryId", function(done){
		var categoryId = 8;
		var productJson = {"product":[{"id":71,"name":"Call of Duty: Modern Warfare 3 ","category":8,"model":"1071.0","specialProduct":0,"listPrice":44.99,"sellPrice":45.99,"description":"Call of Duty: Modern Warfare 3 by Activision Publishing (Video Game - Nov 8, 2011) - Xbox 360","image":"product/videogames_71.png","detailImage":"product/details/videogames_71.png","rating":0},{"id":72,"name":"Halo: Combat Evolved Anniversary by Microsoft","category":8,"model":"1072.0","specialProduct":0,"listPrice":29.97,"sellPrice":28,"description":"Halo: Combat Evolved Anniversary by Microsoft (Video Game - Nov 15, 2011) - Xbox 360","image":"product/videogames_72.png","detailImage":"product/details/videogames_72.png","rating":0},{"id":73,"name":"Uncharted 3: Drake's Deception","category":8,"model":"1073.0","specialProduct":0,"listPrice":29.97,"sellPrice":28,"description":"Uncharted 3: Drake's Deception by Sony Computer Entertainment (Video Game - Nov 1, 2011) - PlayStation 3","image":"product/videogames_73.png","detailImage":"product/details/videogames_73.png","rating":0},{"id":74,"name":"Just Dance 3 by UBI Soft","category":8,"model":"1074.0","specialProduct":0,"listPrice":29.99,"sellPrice":25.99,"description":"Just Dance 3 by UBI Soft (Video Game - Oct 7, 2011) - Nintendo Wii ","image":"product/videogames_74.png","detailImage":"product/details/videogames_74.png","rating":0},{"id":75,"name":"New Super Mario Bros. Wii","category":8,"model":"1075.0","specialProduct":0,"listPrice":15.99,"sellPrice":14.99,"description":"New Super Mario Bros. Wii by Nintendo (Video Game - Nov 15, 2009) - Nintendo Wii \n","image":"product/videogames_75.png","detailImage":"product/details/videogames_75.png","rating":0},{"id":76,"name":"Battlefield 3","category":8,"model":"1076.0","specialProduct":0,"listPrice":22.99,"sellPrice":20.99,"description":"\nBattlefield 3 by Electronic Arts (Video Game - Oct 2011) - Xbox 360 ","image":"product/videogames_76.png","detailImage":"product/details/videogames_76.png","rating":0},{"id":77,"name":"Batman: Arkham City","category":8,"model":"1077.0","specialProduct":0,"listPrice":22.99,"sellPrice":20.99,"description":"Batman: Arkham City by Warner Bros (Video Game - Oct 18, 2011) - PlayStation 3","image":"product/videogames_77.png","detailImage":"product/details/videogames_77.png","rating":0},{"id":78,"name":"Assassin's Creed Revelations","category":8,"model":"1078.0","specialProduct":0,"listPrice":27.99,"sellPrice":25.99,"description":"Assassin's Creed Revelations by UBI Soft (Video Game - Nov 15, 2011) - Xbox 360","image":"product/videogames_78.png","detailImage":"product/details/videogames_78.png","rating":0},{"id":79,"name":"Mario Kart 7","category":8,"model":"1079.0","specialProduct":0,"listPrice":12.99,"sellPrice":10.99,"description":"Mario Kart 7 by Nintendo (Video Game - Dec 4, 2011) - Nintendo 3DS","image":"product/videogames_79.png","detailImage":"product/details/videogames_79.png","rating":0},{"id":80,"name":"LEGO Harry Potter: Years 5-7","category":8,"model":"1080.0","specialProduct":0,"listPrice":47.99,"sellPrice":40.99,"description":"LEGO Harry Potter: Years 5-7 by Warner Bros (Video Game - Nov 11, 2011) - Nintendo Wii \n","image":"product/videogames_80.png","detailImage":"product/details/videogames_80.png","rating":0}]};
		products.retrieveProducts(categoryId, function(productdata){
			assert.deepEqual(JSON.stringify(productJson), JSON.stringify(productdata), "Products Success");
		});		
		setTimeout(done, 100);
	}); 
});

describe("Testing Products Service", function() {
	it("With Different CategoryId", function(done){
		var categoryId = 2;
		var productJson = {"product":[{"id":71,"name":"Call of Duty: Modern Warfare 3 ","category":8,"model":"1071.0","specialProduct":0,"listPrice":44.99,"sellPrice":45.99,"description":"Call of Duty: Modern Warfare 3 by Activision Publishing (Video Game - Nov 8, 2011) - Xbox 360","image":"product/videogames_71.png","detailImage":"product/details/videogames_71.png","rating":0},{"id":72,"name":"Halo: Combat Evolved Anniversary by Microsoft","category":8,"model":"1072.0","specialProduct":0,"listPrice":29.97,"sellPrice":28,"description":"Halo: Combat Evolved Anniversary by Microsoft (Video Game - Nov 15, 2011) - Xbox 360","image":"product/videogames_72.png","detailImage":"product/details/videogames_72.png","rating":0},{"id":73,"name":"Uncharted 3: Drake's Deception","category":8,"model":"1073.0","specialProduct":0,"listPrice":29.97,"sellPrice":28,"description":"Uncharted 3: Drake's Deception by Sony Computer Entertainment (Video Game - Nov 1, 2011) - PlayStation 3","image":"product/videogames_73.png","detailImage":"product/details/videogames_73.png","rating":0},{"id":74,"name":"Just Dance 3 by UBI Soft","category":8,"model":"1074.0","specialProduct":0,"listPrice":29.99,"sellPrice":25.99,"description":"Just Dance 3 by UBI Soft (Video Game - Oct 7, 2011) - Nintendo Wii ","image":"product/videogames_74.png","detailImage":"product/details/videogames_74.png","rating":0},{"id":75,"name":"New Super Mario Bros. Wii","category":8,"model":"1075.0","specialProduct":0,"listPrice":15.99,"sellPrice":14.99,"description":"New Super Mario Bros. Wii by Nintendo (Video Game - Nov 15, 2009) - Nintendo Wii \n","image":"product/videogames_75.png","detailImage":"product/details/videogames_75.png","rating":0},{"id":76,"name":"Battlefield 3","category":8,"model":"1076.0","specialProduct":0,"listPrice":22.99,"sellPrice":20.99,"description":"\nBattlefield 3 by Electronic Arts (Video Game - Oct 2011) - Xbox 360 ","image":"product/videogames_76.png","detailImage":"product/details/videogames_76.png","rating":0},{"id":77,"name":"Batman: Arkham City","category":8,"model":"1077.0","specialProduct":0,"listPrice":22.99,"sellPrice":20.99,"description":"Batman: Arkham City by Warner Bros (Video Game - Oct 18, 2011) - PlayStation 3","image":"product/videogames_77.png","detailImage":"product/details/videogames_77.png","rating":0},{"id":78,"name":"Assassin's Creed Revelations","category":8,"model":"1078.0","specialProduct":0,"listPrice":27.99,"sellPrice":25.99,"description":"Assassin's Creed Revelations by UBI Soft (Video Game - Nov 15, 2011) - Xbox 360","image":"product/videogames_78.png","detailImage":"product/details/videogames_78.png","rating":0},{"id":79,"name":"Mario Kart 7","category":8,"model":"1079.0","specialProduct":0,"listPrice":12.99,"sellPrice":10.99,"description":"Mario Kart 7 by Nintendo (Video Game - Dec 4, 2011) - Nintendo 3DS","image":"product/videogames_79.png","detailImage":"product/details/videogames_79.png","rating":0},{"id":80,"name":"LEGO Harry Potter: Years 5-7","category":8,"model":"1080.0","specialProduct":0,"listPrice":47.99,"sellPrice":40.99,"description":"LEGO Harry Potter: Years 5-7 by Warner Bros (Video Game - Nov 11, 2011) - Nintendo Wii \n","image":"product/videogames_80.png","detailImage":"product/details/videogames_80.png","rating":0}]};
		products.retrieveProducts(categoryId, function(productdata){
			assert.notEqual(JSON.stringify(productJson), JSON.stringify(productdata), "Products Failure");
		});		
		setTimeout(done, 100);
	}); 
});