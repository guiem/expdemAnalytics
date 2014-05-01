angular.module('wordService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Words', function($http) {
		return {
			getNGrams : function() {
				return $http.get('/api/ngrams');
			},
		}
	});