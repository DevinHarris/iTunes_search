angular.module('itunes_app')
	.factory('Search', ['$http', '$q', function($http, $q) {

		var service = {};
		service.getArtist = function(artist) {
			var deferred = $q.defer();

			artist = artist.split(' ').join('+');
			var itunes_url = 'https://itunes.apple.com/search?term=' + artist;

			$http.jsonp(itunes_url, {
				params: {
					callback: 'JSON_CALLBACK'
				}

			}).success(function(data) {
				deferred.resolve(data);
			}).error(function(error) {
				deferred.reject(error);
			});

			return deferred.promise;

		};

		return service;

	}]);
