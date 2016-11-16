"use strict";

app.factory("ItemFactory", function($q, $http, FIREBASE_CONFIG){

	var getItemList = function(){
		return $q((resolve, reject)=>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/items.json`)
			.success(function(response){
				let items = [];
				Object.keys(response).forEach(function(key){
					response[key].id = key;
					items.push(response[key]);
				})
				resolve(items);
			})
			.error(function(errorResponse){
				reject(errorResponse);
			});
		});
	}

	return {getItemList:getItemList, }
});

	// 	return new Promise((resolve, reject)=>{
	// 		$.ajax({
	// 			method: 'GET',
	// 			url: `${apiKeys.databaseURL}/items.json?orderBy="uid"&equalTo="${uid}"`
	// 		}).then((response)=>{
	// 			let items = [];
	// 			Object.keys(response).forEach(function(key){
	// 				response[key].id = key;
	// 				items.push(response[key]);
	// 			});

	// 			resolve(items);
	// 		}, (error)=>{
	// 			reject(error);
	// 		});
	// 	});
	// };