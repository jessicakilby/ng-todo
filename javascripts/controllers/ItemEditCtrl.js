"use strict";

app.controller("ItemEditCtrl", function($scope, $routeParams, $location, ItemFactory){
	$scope.newTask = {};
	let ItemId = $routeParams.id;

	ItemFactory.getSingleItem(ItemId).then(function(oneItem){
		oneItem.id = ItemId;
		$scope.newTask = oneItem;
	});
	$scope.addNewItem = function(){
		ItemFactory.editItem($scope.newTask).then(function(response){
			$scope.newTask = {};
			$location.url("/items/list");
		});
	};
});