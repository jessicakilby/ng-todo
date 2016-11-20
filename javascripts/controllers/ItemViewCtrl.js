"use strict";

app.controller("ItemViewCtrl", function($scope, $location, ItemFactory){
	
	$scope.newTask = {};

	$scope.addNewItem = function(){
		$scope.newTask.isCompleted = false;
		ItemFactory.postNewItem($scope.newTask).then(function(itemId){
			$location.url("/items/list");
			$scope.newTask = {};
		});
	};

});

//$location