angular.module('tweetService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Tweets', function($http) {
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
                return $http.get('/api/usertweets/' + screen_name);
            },
            getMinDate: function() {
                return $http.get('/api/tweetmindate/');
            },
            getMaxDate: function() {
                return $http.get('/api/tweetmaxdate/');
            },
            getInGap: function(start,end) {
                return $http.get('/api/tweetsintimegap/' + start + '/' + end);
            },
            getPerDay: function(start,end) {
                return $http.get('/api/tweetsperday/' + start + '/' + end)
            },
		}
	});



