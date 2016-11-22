"use strict";

app.run(function(FIREBASE_CONFIG){
	firebase.initializeApp(FIREBASE_CONFIG);
});

//happens before page loads.
//$routeProvider show the different views {}
app.config(function($routeProvider){
	$routeProvider
		.when('/items/list', {
			templateUrl: "partials/item-list.html",
			controller: "ItemListCtrl"
		})
		.when('/items/new', {
			templateUrl: "partials/item-new.html",
			controller: "ItemNewCtrl"
		})
		.when('/items/view/:id', {
			templateUrl: "partials/item-view.html",
			controller: "ItemViewCtrl"
		})
		.when("/items/edit/:id", {
			templateUrl: "partials/item-new.html",
			controller: "ItemEditCtrl"
		})
		.otherwise('/items/list');
});





// $route is used for deep-linking URLs to controllers and views (HTML partials). It watches $location.url() and tries to map the path to an existing route definition.
// Requires the ngRoute module to be installed.
//ngView is a directive that complements the $route service by including the rendered template of the current route into the main layout (index.html) file. Every time the current route changes, the included view changes with it according to the configuration of the $route service 
//:id tells it it will change