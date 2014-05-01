var TwitterUser = require('./models/twitterUser');
var Tweet = require('./models/tweet');
var Word = require('./models/word');

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all todos
	/*app.get('/api/todos', function(req, res) {

		// use mongoose to get all todos in the database
		Todo.find(function(err, todos) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(todos); // return all todos in JSON format
		});
	});*/

	/*// create todo and send back all todos after creation
	app.post('/api/todos', function(req, res) {

		// create a todo, information comes from AJAX request from Angular
		Todo.create({
			text : req.body.text,
			done : false
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			Todo.find(function(err, todos) {
				if (err)
					res.send(err)
				res.json(todos);
			});
		});

	});*/

    /*
	// delete a todo
	app.delete('/api/todos/:todo_id', function(req, res) {
		Todo.remove({
			_id : req.params.todo_id
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			Todo.find(function(err, todos) {
				if (err)
					res.send(err)
				res.json(todos);
			});
		});
	});*/
	
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