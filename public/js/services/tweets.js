angular.module('tweetService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Tweets', function($http,$q) {
		return {
			getTotalTweets : function() {
				return $http.get('/api/totaltweets');
			},
            getTotalRTweets : function() {
                return $http.get('/api/totalrtweets');
            },
            getTweetsPerUser : function() {
                return $http.get('/api/tweetsperuser');
            },
            getNumGeo: function() {
                return $http.get('/api/numgeo');
            },
            getByUser: function(screen_name) {
                var deferred = $q.defer();
                $http.get('/api/usertweets/' + screen_name)
                .success(function(result){
                    deferred.resolve(result);
                });
                return deferred.promise;
            },
            getMinDate: function() {
                return $http.get('/api/tweetmindate/');
            },
            getMaxDate: function() {
                return $http.get('/api/tweetmaxdate/');
            },
            getInGap: function(start,end) {
                var deferred = $q.defer();
                $http({method:"GET", url:'/api/tweetsintimegap/' + start + '/' + end})
                .success(function(result){
                    deferred.resolve(result);
                });
                return deferred.promise;
            },
            getPerDay: function(start,end) {
                return $http.get('/api/tweetsperday/' + start + '/' + end)
            },
            getWithTerms: function(terms,user) {
                var deferred = $q.defer();
                $http({method:"GET", url:'/api/tweetsintimegap/' + terms + '/' + user})
                .success(function(result){
                      deferred.resolve(result);
                });
                return deferred.promise;
            },
		}
	});



