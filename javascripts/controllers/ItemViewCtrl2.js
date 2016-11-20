"use strict";

app.controller("ItemViewCtrl2", function($scope, $routeParams, ItemFactory){
	$scope.selectedItem = {};
	let itemId = $routeParams.id;

	ItemFactory.getSingleItem(itemId).then(function(oneItem){
		oneItem.id = itemId;
		$scope.selectedItem = oneItem;
	});
});