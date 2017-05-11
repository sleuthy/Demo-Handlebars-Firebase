"use strict";
console.log("cupcakes are nice");

let Handlebars = require('hbsfy/runtime'),
	cakeInventory = require('./bakery.js'),
	cakeTemplate = require('../templates/cake-grid.hbs'),
	eventStuff = require("./events.js"),
	welcomeTemplate = require('../templates/welcome.hbs'),
	welcomeData = require("../templates/welcome-data.js");

Handlebars.registerHelper("increment", (value) => parseInt(value) + 1);

$("#welcome").append(welcomeTemplate(welcomeData));

function populatePage(stuff){
	//make a div to hold rendered html
	console.log("stuff", stuff);
	let obj = {ccakes: stuff};
	let newDiv = document.createElement("div");
	console.log("popPage", newDiv, stuff);
	newDiv.innerHTML = cakeTemplate(obj);
	$("#cake-cards").append(newDiv);
	eventStuff();
}

cakeInventory.loadInventory()
.then(
	(inventoryFromLoadInventoryResolve) =>{
		console.log("cake promise", inventoryFromLoadInventoryResolve);
		populatePage(inventoryFromLoadInventoryResolve);
	},
	(reason) =>{
		console.log("something went wrong.");
	});