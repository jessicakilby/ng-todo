"use strict";

app.controller("ItemListCtrl", function($scope, $rootScope, ItemFactory){
	
	$scope.items = [];

	let getItems = function(){
		ItemFactory.getItemList($rootScope.user.uid).then(function(fbItems){
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

	$scope.inputChange = function(thingy){
		ItemFactory.editItem(thingy).then(function(response){
		});
	};

});