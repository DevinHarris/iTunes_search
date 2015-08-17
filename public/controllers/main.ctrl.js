angular.module('itunes_app')
	.controller('mainCtrl', [ 'Search', function(Search) {
		var vm = this;
		this.msg = 'Welcome to my iTunes App';
	}]);