"use strict";

app.controller("ItemListCtrl", function($scope, ItemFactory){
	
	$scope.items = [];

	let getItems = function(){
		ItemFactory.getItemList().then(function(fbItems){
			console.log("items from controller", fbItems);
			$scope.items = fbItems;
		});
	};
	getItems();	

	$scope.deleteItem = function(itemId){
		console.log("delete item", itemId);
		ItemFactory.deleteItem(itemId).then(function(response){
			getItems();
		});
	};
});