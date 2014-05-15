var TwitterUser = require('./models/twitterUser');
var Tweet = require('./models/tweet');
var Word = require('./models/word');
var HashTag = require('./models/hashtag');

module.exports = function(app) {
	
	// get all users
	app.get('/api/users', function(req, res) {

		// use mongoose to get all users in the database
		TwitterUser.find(function(err, users) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(users); // return all todos in JSON format
		});
	});
	
	// get number of users
	app.get('/api/totalusers', function(req, res) {

		// db.users.find().count()
		TwitterUser.find().count(function(err, count) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(count); // return all todos in JSON format
		});
	});
    
    app.get('/api/usernames', function(req, res) {
            
            // db.users.find().count()
            TwitterUser
            .find()
            .select('screen_name')
            .exec(function(err, user) {
                                     
                // if there is an error retrieving, send the error. nothing after res.send(err) will execute
                if (err)
                    res.send(err)
                                     
                res.json(user); // return all todos in JSON format
            });
        });
    
    // get number of tweets
	app.get('/api/totaltweets', function(req, res) {
            
        // db.tweets.find().count()
        Tweet.find().count(function(err, count) {
                                     
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)
                                     
            res.json(count); // return all todos in JSON format
        });
    });
    
    // get number of tweets
	app.get('/api/totalrtweets', function(req, res) {
        Tweet.find({"retweeted": true}).count(function(err, count) {
            if (err)
                res.send(err)
                               
            res.json(count);
        });
    });
    
    // get num tweets per user
	app.get('/api/tweetsperuser', function(req, res) {
            
            // db.tweets.aggregate([{$group:{_id:"$user.screen_name",count:{$sum:1}}},{$sort:{count:-1}}])
            Tweet.aggregate([{$group:{_id:"$user.screen_name",count:{$sum:1}}},{$sort:{count:-1}}], function(err,result) {
                               
                // if there is an error retrieving, send the error. nothing after res.send(err) will execute
                if (err)
                    res.send(err)
                               
                res.json(result); // return all todos in JSON format
            });
    });
    
    // get num tweets geolocalized
	app.get('/api/numgeo', function(req, res) {
            
        // db.tweets.find({'coordinates':{$ne:null}}).count()
        Tweet.find({'coordinates':{$ne:null}}).count(function(err,count) {
                            
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)
                            
            res.json(count); // return all todos in JSON format
        });
    });
    
    // get count words
	app.get('/api/ngrams', function(req, res) {
            var blackList = [":","@","#","http","el","la",",","de","en","y","los","''","a","``",".","sobre","por","...","con","para","rt","las","!","no","que","una","un","l","|","san","s","tel","es","se","al","su","-","scoopit","?","del","d","amb","i","te","lo","e","24","per","https",")","(","o","diversidad","funcional","diversidadfuncional","funcional."];
            // db.words.find({word:{$nin:blackList}}).sort( { count: -1 } )
            Word
            .find({word:{$nin:blackList}})
            //.limit(1000)
            .sort('-count')
            .exec(function(err,word){
                  if (err)
                    res.send(err);
                  res.json(word);
            });
    });
    
    // get count words
	app.get('/api/nhashtags', function(req, res) {
            var blackList = ["#diversidadfuncional"];
            // db.words.find({word:{$nin:blackList}}).sort( { count: -1 } )
            HashTag
            .find({hashtag:{$nin:blackList}})
            //.limit(1000)
            .sort('-count')
            .exec(function(err,hashtag){
                  if (err)
                  res.send(err);
                  res.json(hashtag);
                  });
            });
    
    // delete a todo
	app.get('/api/usertweets/:screen_name', function(req, res) {
               Tweet.find({
                           "user.screen_name" : req.params.screen_name
                           }, function(err, tweets) {
                           if (err)
                                res.send(err);
                            res.json(tweets);
                        });
               });

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};