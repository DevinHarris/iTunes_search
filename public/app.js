var app = angular.module('itunes_app', ['ngRoute']);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'views/welcome.html',
			controllerAs: 'mainCtrl'
		})
		.when('/artist', {
			controllerAs: 'artistCtrl',
			templateUrl: 'views/artists.html'
		})
		.when('/artist/:id', {
			controllerAs: 'artistCtrl',
			templateUrl: 'views/artist.html'
		})
		.otherwise({
			redirectTo: '/'
		});

	$locationProvider.html5Mode(true);
}]);
