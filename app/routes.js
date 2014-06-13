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
    
    // get date of first collected tweet
	app.get('/api/tweetmindate', function(req, res) {
        Tweet
        .find({},{created_at:1,created_at_dt:1})
        .limit(1)
        .sort('created_at_dt')
        .exec(function(err,date) {
            if (err)
                res.send(err)
            res.json(date);
        });
    });
    
    // get date of last collected tweet
	app.get('/api/tweetmaxdate', function(req, res) {
    Tweet
    .find({},{created_at:1,created_at_dt:1})
    .limit(1)
    .sort('-created_at_dt')
    .exec(function(err,date) {
        if (err)
            res.send(err)
        res.json(date);
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
    
    // get tweets by screen_name
	app.get('/api/usertweets/:screen_name', function(req, res) {
        Tweet.find({"user.screen_name" : req.params.screen_name}, function(err, tweets) {
            if (err)
                res.send(err);
            res.json(tweets);
        });
    });
    
    // get tweets between dates
	app.get('/api/tweetsintimegap/:start_date/:end_date', function(req, res) {
        var dateStartAux = req.params.start_date.split("-");
        var dateStart = new Date(dateStartAux[0],(parseInt(dateStartAux[1])-1).toString(),dateStartAux[2],'00','00','00');
        var dateEndAux = req.params.end_date.split("-");
        var dateEnd = new Date(dateEndAux[0],(parseInt(dateEndAux[1])-1).toString(),dateEndAux[2],'23','59','59');
        Tweet.find({"created_at_dt" :{$gte : dateStart, $lte : dateEnd } })
        .select('created_at_dt text user.screen_name')
        .exec(function(err, tweets) {
            if (err)
                res.send(err);
            res.json(tweets);
        });
    });
    
    // get num tweets per day between dates
	app.get('/api/tweetsperday/:start_date/:end_date', function(req, res) {
        var dateStartAux = req.params.start_date.split("-");
        var dateStart = new Date(Date.UTC(dateStartAux[0],(parseInt(dateStartAux[1])-1).toString(),dateStartAux[2],'00','00','00'));
        var dateEndAux = req.params.end_date.split("-");
        var dateEnd = new Date(Date.UTC(dateEndAux[0],(parseInt(dateEndAux[1])-1).toString(),dateEndAux[2],'23','59','59'));
        Tweet//.find({"created_at_dt" :{$gte : dateStart, $lte : dateEnd } })
        .aggregate(
            { $match : {"created_at_dt" :{$gt : dateStart, $lte : dateEnd } } },
            { $group : {
                _id : { year: { $year : "$created_at_dt" }, month: { $month : "$created_at_dt" },day: { $dayOfMonth : "$created_at_dt" }},
                count : { $sum : 1 }}
            },function(err, tweets) {
            if (err)
                res.send(err);
            res.json(tweets);
        });
    });
    
    // get tweets that contain certain terms
	app.get('/api/tweetsbyterm/:user/:terms', function(req, res) {
        var i = 0;
        var terms_aux = req.params.terms.split(',');
        var terms = [];
        while (i < terms_aux.length) {
            terms.push(eval('/'+terms_aux[i]+'/i'));
            i += 1;
        }
            console.log(req.params.user);
        if (req.params.user !== 'false'){ // TODO: make this prettier and use false value, not string
            console.log('entro a no false');
        Tweet.find({"user.screen_name":req.params.user,text: { $in: terms} }, {text:1,"user.screen_name":1}, function(err, tweets) {
                   console.log('tweets'+tweets);
            if (err)
                res.send(err);
            res.json(tweets);
        });
        }
            else{
            console.log('entro a  false');

            Tweet.find({text: { $in: terms} }, {text:1,"user.screen_name":1}, function(err, tweets) {
                       console.log('tweets'+tweets);
                       if (err)
                       res.send(err);
                       res.json(tweets);
                       });
            }
    });

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};