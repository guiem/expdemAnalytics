angular.module('expdemController', [])

	.controller('mainController', function($scope, $http, Users, Tweets, Words, HashTags) {
                
        Tweets.getTweetsPerUser()
            .success(function(data){
                $scope.tweetsperuser = data;
            });
                
        Words.getNGrams()
        .success(function(data){
            $scope.ngrams = data;
        });
                
        HashTags.getNHashtags()
        .success(function(data){
            $scope.nhashtags = data;
        });
                
        Users.getTotalUsers()
            .success(function(data) {
                $scope.totalusers = data;
        });
                
        Users.getUserNames()
            .success(function(data) {
                $scope.usernames = data;
        });
        
        function changeMaxTwittersChart(numPeople){
            tweetsPerUserData = [];
            var count = 0;
            angular.forEach($scope.tweetsperuser, function(res) {
                count += 1;
                if (count > numPeople){
                    return;
                }
                tweetsPerUserData.push({label:res._id,value:res.count});
                });
            change(tweetsPerUserData);
        }
                
        $scope.changeMaxTwitters = function() {
            if (!$scope.maxTweeters)
                changeMaxTwittersChart(10);
            else
                changeMaxTwittersChart($scope.maxTweeters);
        };
                
        function changeMaxWordsChart(numWords){
            var wordsData = [];
            var usersBlackList = [];
            angular.forEach($scope.usernames, function(res) {
                usersBlackList.push(res.screen_name);
            });
            var count = 0;
            var maxCount = 0;
            angular.forEach($scope.ngrams, function(res) {
                count += 1;
                if (count > numWords){
                    return;
                }
                maxCount = Math.max(maxCount,res.count);
                var isUser = usersBlackList.indexOf(res.word);
                if(isUser == -1)
                    wordsData.push([res.word, res.count*100/maxCount]);
            });
            WordCloud(document.getElementById('word-cloud-chart'), { list: wordsData } );
        }
                
                $scope.changeMaxWords = function() {
                if (!$scope.maxWords)
                changeMaxWordsChart(50);
                else
                changeMaxWordsChart($scope.maxWords);
                };
                
        $scope.changeMaxHashTags = function() {
            if (!$scope.maxHashTags)
                changeMaxHashTagsChart(50);
            else
                changeMaxHashTagsChart($scope.maxHashTags);
        };
                
        function changeMaxHashTagsChart(numWords){
                var wordsData = [];
                var usersBlackList = [];
                angular.forEach($scope.usernames, function(res) {
                                usersBlackList.push(res.screen_name);
                                });
                var count = 0;
                var maxCount = 0;
                angular.forEach($scope.nhashtags, function(res) {
                                count += 1;
                                if (count > numWords){
                                return;
                                }
                                maxCount = Math.max(maxCount,res.count);
                                var isUser = usersBlackList.indexOf(res.word);
                                if(isUser == -1)
                                wordsData.push([res.hashtag, res.count*100/maxCount]);
                                });
                WordCloud(document.getElementById('word-cloud-chart-hashtags'), { list: wordsData } );
                }

                
		$scope.formData = {};
		$scope.loading = true;
        

        Tweets.getTotalTweets()
        .success(function(data) {
                 $scope.totaltweets = data;
                 $scope.loading = false;
                 });
        
        Tweets.getTotalRTweets()
        .success(function(data) {
            $scope.totalrtweets = data;
            $scope.loading = false;
        });
        
        Tweets.getNumGeo()
        .success(function(data) {
            $scope.numgeo = data;
            $scope.loading = false;
        });
        
        $scope.getTweetsByUser = function() {
                
                Tweets.getByUser($scope.currentuser)
				// if successful creation, call our get function to get all the new todos
                    .success(function(data) {
                        $scope.currenttweets = data; // assign our new list of todos
                });
        };
                              
                                
        /*
		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createTodo = function() {
			$scope.loading = true;

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.text != undefined) {

				// call the create function from our service (returns a promise object)
				Todos.create($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.todos = data; // assign our new list of todos
					});
			}
		};

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteTodo = function(id) {
			$scope.loading = true;

			Todos.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.todos = data; // assign our new list of todos
				});
		};
        */
	});