"use strict";

let isAuth = (AuthFactory) => new Promise((resolve, reject)=>{
	if(AuthFactory.isAuthenticated()){
		resolve();
	} else {
		reject();
	}
});

app.run(function($rootScope, $location, FIREBASE_CONFIG, AuthFactory){
	firebase.initializeApp(FIREBASE_CONFIG);

	$rootScope.$on("$routeChangeStart", function(event, currRoute, prevRoute){

		let logged = AuthFactory.isAuthenticated();
		let appTo;

		if(currRoute.originalPath){
			appTo = currRoute.originalPath.indexOf("/auth") !== -1;
		}

		if(!appTo && !logged) {
			event.preventDefault();
			$location.path("/auth");
		}

	});

});

//happens before page loads.
//$routeProvider show the different views {}
app.config(function($routeProvider){
	$routeProvider
		.when("/auth", {
			templateUrl: "partials/auth.html",
			controller: "AuthCtrl"
		})
		.when('/items/list', {
			templateUrl: "partials/item-list.html",
			controller: "ItemListCtrl",
			resolve: {isAuth} 
		})
		.when('/items/new', {
			templateUrl: "partials/item-new.html",
			controller: "ItemNewCtrl",
			resolve: {isAuth}
		})
		.when('/items/view/:id', {
			templateUrl: "partials/item-view.html",
			controller: "ItemViewCtrl",
			resolve: {isAuth}
		})
		.when("/items/edit/:id", {
			templateUrl: "partials/item-new.html",
			controller: "ItemEditCtrl",
			resolve: {isAuth}
		})
		.when("/logout", {
			templateUrl: "partials/auth.html",
			controller: "AuthCtrl",
			resolve: {isAuth}
		})
		.otherwise('/auth');
});





// $route is used for deep-linking URLs to controllers and views (HTML partials). It watches $location.url() and tries to map the path to an existing route definition.
// Requires the ngRoute module to be installed.
//ngView is a directive that complements the $route service by including the rendered template of the current route into the main layout (index.html) file. Every time the current route changes, the included view changes with it according to the configuration of the $route service 
//:id tells it it will change