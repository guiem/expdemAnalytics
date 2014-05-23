angular.module('expdemController', ['ui.bootstrap'])

	.controller('mainController', function($scope, $filter, $http, Users, Tweets, Words, HashTags) {
                
        Tweets.getMinDate()
        .success(function(data) {
            $scope.dtStart = new Date(data[0].created_at_dt);
        });
            
        Tweets.getMaxDate()
        .success(function(data) {
            $scope.dtEnd = new Date(data[0].created_at_dt);
        });
                
        $scope.datepickers = {
            dtStart: $scope.dtStart,
            dtEnd: $scope.dtEnd,
        }
                
        $scope.clear = function () {
            $scope.dtStart = null;
            $scope.dtEnd= null;
        };
                
        // Disable weekend selection
        $scope.disabled = function(date, mode) {
            return false;
            //return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
        };
                
        $scope.toggleMin = function() {
            $scope.minDate = null // $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();
                
        $scope.open = function($event, which) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.datepickers[which]= true;
        };
                
        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1,
            showWeeks: false,
        };
                
        $scope.formats = ['dd/MM/yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
                
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
            .success(function(data) {
                $scope.currenttweets = data;
            });
        };
                
        $scope.getTweetsInGap = function() {
            Tweets.getInGap($filter('date')($scope.dtStart,'yyyy-MM-dd'),$filter('date')($scope.dtEnd,'yyyy-MM-dd'))
            .success(function(data) {
                //$scope.currenttweets = data;
            });
        };
        
        function drawTweetsPerDay(){
            var dayList = [['Día','Núm.Tweets']];
            var currDate = $scope.dtStart;
            if (currDate < $scope.dtEnd) {
                while (currDate <= $scope.dtEnd) {
                    dayList.push([currDate.getDate()+'/'+((parseInt(currDate.getMonth())+1).toString()+'/'+currDate.getFullYear()),0]);
                    currDate = new Date(currDate.setDate(currDate.getDate() + 1));
                }
            }
            angular.forEach($scope.tweetsperday, function(res) {
                var i = 0;
                while (i < dayList.length) {
                    if (""+res._id.day+'/'+res._id.month+'/'+res._id.year+"" === dayList[i][0]) {
                        dayList[i][1] = res.count;
                        break;
                    }
                    i += 1;
                }
            });
            drawTweetsPerDayChart(dayList);
        }
                
        $scope.getTweetsPerDay = function() {
            var ini = $filter('date')($scope.dtStart,'yyyy-MM-dd');
            var end = $filter('date')($scope.dtEnd,'yyyy-MM-dd');
            console.log('ini '+ini);
            console.log('end '+end);
            Tweets.getPerDay(ini,end)
            .success(function(data) {
                $scope.tweetsperday = data;
                drawTweetsPerDay();
            });
        };
        
        // first default call to show tweets per day
        //$scope.getTweetsPerDay();
});