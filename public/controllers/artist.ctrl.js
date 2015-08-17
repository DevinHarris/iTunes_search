angular.module('itunes_app')
	.controller('artistCtrl', ['Search', function(Search) {
		var vm = this;
		vm.artistMsg = "Welcome to the artist page!";
		search = function(artist) {
			Search.getArtist(artist).then(function(data) {
				vm.artist = data;

				console.log(vm.artist);
			});
		};

		search("Sleeping With Sirens");

	}]);