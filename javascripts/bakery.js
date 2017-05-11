"use strict";

let inventory = [];
let bakery = {};

var fillInventory = (data =>{
	data.forEach(function(element){
	inventory.push(element);
	});
});

bakery.getInventory = () => {
	return inventory;
};

bakery.loadInventory = () => {
	return new Promise( function(resolve, reject){
		let inventoryLoader = new XMLHttpRequest();
		inventoryLoader.open("GET", "https://awesome-data-fb642.firebaseio.com/ccakes.json");
		inventoryLoader.send();

		inventoryLoader.addEventListener("load", function(){
			var data = JSON.parse(this.responseText);
			console.log("data", data);
			fillInventory(data);
			resolve(inventory);
		});
	});
};

module.exports = bakery;