const gsignal = require("./gsignal.js");
const signin = require("./signin.js");
const signup = require("./signup.js");
const path = require('path');
const fs = require('fs');

gsignal.boot(gsignal.database, true);
gsignal.postUpload(gsignal.database);









// read image files
gsignal.get('*', function(req, res, next) { 
	
	
	var match = req.path.match(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i);
    if (match !== null) {
		
		console.log("image found " + req.url);
        
		// check file
		if (fs.existsSync(__dirname + '/static' + req.url)) {

			res.sendFile(path.join(__dirname + '/static' + req.url));
		}
		else if (fs.existsSync(__dirname + '/static' + req.url.split(".")[0])) {

			res.sendFile(path.join(__dirname + '/static' + req.url.split(".")[0]));
		}
		else {
			
			next();
		}
    } 
	else {
		
		console.log("default page " + req.url);
		
        next();    
    }	
});


gsignal.get('/signin', function(req, res) {
	
	res.send(signin.signinHTML());
});


gsignal.get('/signup', function(req, res) {
	
	res.send(signup.signupHTML());
});


gsignal.get('/logout', function(req, res) {
	
	req.session.destroy(function(err) {
		if(err) {
			console.log(err);
		} 
		else {
			res.redirect('/signin');
		}
	});
});


gsignal.get('/dash', function(req, res) {
	
	var ssn = req.session; 
	if(ssn.user) {

		res.sendFile(path.join(__dirname + '/static/dash.html'));
	} 
	else {
		res.redirect('/signin');
	}
});


// create Evebot
gsignal.signup(gsignal.database, "Evebot", "Evebot@gsignal.com", "Eve Bot", "4879356387465");


gsignal.post('/api', function(req, res) {
	
	
	// mac@gmail.com
	// mac westy
	// mac2000
	// pass4000
	
	
	// neo@gmail.com
	// Neo Matrix
	// neo4000
	// pass4000
	console.log(req.body);
	
	if(req.body.type) {
		
		var g_type = req.body.type;
		
		if(g_type == 'signup') {
			
			gsignal.signup(gsignal.database, req.body.user, req.body.email, req.body.fullName, req.body.password);
			res.json({ "status": 200 });
		}
		else if(g_type == 'signin') {
			
			gsignal.signin(gsignal.database, req.body.user_or_email, req.body.password, function(g_status, g_user) {
				
				var sess = req.session;
				sess.user = g_user;	
				res.json({ "status": g_status });
			});
		}
		else if(g_type == 'onload') {
			
			var sess = req.session;		
			gsignal.userLoad(gsignal.database, sess.user, function(g_obj) {
				
				res.json(g_obj);
			});
		}
		else if(g_type == 'create_conversation') {
			
			var sess = req.session;
			gsignal.createConversation(gsignal.database, sess.user, req.body.username, req.body.message);
			res.json({ "status": 200 });
		}
		else if(g_type == 'create_channel') {
			
			var sess = req.session;
			gsignal.createChannel(gsignal.database, sess.user, req.body.channel_name, req.body.description);
			res.json({ "status": 200 });
		}	
		else if(g_type == 'get_conversations') {
			
			var sess = req.session;	
			gsignal.getConversations(gsignal.database, sess.user, function(g_obj) {
				
				res.json({"messages":g_obj});
			});
		}	
		else if(g_type == 'get_channels') {
			
			var sess = req.session;	
			gsignal.getChannels(gsignal.database, sess.user, function(g_obj) {
				
				res.json({"channels":g_obj});
			});
		}
		else if(g_type == 'send_channel_message') {
			
			var sess = req.session;
			gsignal.sendChannelMessage(gsignal.database, sess.user, req.body.channel_name, req.body.message);
			res.json({ "status": 200 });
		}
		else if(g_type == 'get_icons') {
			
			var sess = req.session;
			gsignal.getIcons(gsignal.database, sess.user, function(g_obj) {
				
				res.json({"user_icons":g_obj});
			});
		}
		else {
			
			res.json({ "status": 400 });
		}		
	}
	else {
		
		res.json({ "status": 400 });
	}
	
});


gsignal.listen(8080);














