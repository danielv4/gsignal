const express = require("express");
const http = require("http");
const session = require('express-session');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');
const sqlite3 = require('sqlite3');
const bcrypt = require ('bcrypt');
const request = require('request');
const multer = require('multer');




var upload = multer({ dest: 'static/generated/' })
const app = express();
const server = http.createServer(app);





// should use https only and non js cookie later
app.use(session({
		
	genid: (req) => {
		return uuidv4()
	},
	name: 'defaultStore', 
	secret: uuidv4(),
	resave: false,
	cookie: { httpOnly: true, secure: false, ephemeral: true, maxAge: 365 * 24 * 60 * 60 * 1000 },
	saveUninitialized: true
}));


// enable json
app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));


this.validateEmail = function (email) {	
	
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


this.isAlphaNumeric = function (string) {		
	
	return string.match(/^[-_@. a-zA-Z0-9]+$/);
};


this.database = new sqlite3.Database("storeLite.db", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
	
	if (err) {
		console.error(err.message);
	}
});


this.boot = function (database, debug, callback) {
	
	database.serialize(function() {

		// create account
		database.run("CREATE TABLE g_account (g_user_id varchar(255) NOT NULL, g_username varchar(255) NOT NULL, g_email varchar(255) NOT NULL, g_password varchar(255) NOT NULL, g_fullname varchar(255) NOT NULL, g_img_id varchar(255) NOT NULL);", function(err){

			//callback(err);
		});		
			
		// create conversation
		database.run("CREATE TABLE g_conversation (g_conversation_id varchar(255) NOT NULL, g_user_id_s1 varchar(255) NOT NULL, g_user_id_s2 varchar(255) NOT NULL, g_user_s1 varchar(255) NOT NULL, g_user_s2 varchar(255) NOT NULL, g_message_type varchar(255) NOT NULL, g_message_text varchar(255) NOT NULL, g_message_img_id varchar(255) NOT NULL, g_timestamp varchar(255) NOT NULL);", function(err){

			//callback(err);
		});		
		
		// create channel
		database.run("CREATE TABLE g_channel (g_channel_id varchar(255) NOT NULL, g_created_by varchar(255) NOT NULL, g_created_by_img varchar(255) NOT NULL, g_channel_name varchar(255) NOT NULL, g_user_id varchar(255) NOT NULL, g_user varchar(255) NOT NULL, g_description varchar(255) NOT NULL, g_message_type varchar(255) NOT NULL, g_message_text varchar(255) NOT NULL, g_message_img_id varchar(255) NOT NULL, g_timestamp varchar(255) NOT NULL);", function(err){

			//callback(err);
		});			
		
		
		

		if(debug == true) {
			database.serialize(function () {
				database.all("select name from sqlite_master where type='table'", function (err, tables) {
					//console.log(tables);
				});
			});
		}
	});
	
}


this.signup = function (database, g_user, g_email, g_fullName, g_password, callback) {
	
	const saltRounds = 10;

	//console.log(g_user);
	//console.log(g_email);
	//console.log(g_fullName);
	//console.log(g_password);
	
	//console.log(this.validateEmail(g_email));
	//console.log(this.isAlphaNumeric(g_fullName));
	//console.log(this.isAlphaNumeric(g_user));
	//console.log(this.isAlphaNumeric(g_password));

	if(this.validateEmail(g_email) == true && this.isAlphaNumeric(g_fullName) != null && this.isAlphaNumeric(g_user) != null && this.isAlphaNumeric(g_password) != null) {
	

		bcrypt.genSalt(saltRounds, function(err, salt) {
			
			bcrypt.hash(g_password, salt, function(err, hash) {
				
				//console.log(hash);
				
				database.run('INSERT INTO g_account(g_user_id, g_username, g_email, g_password, g_fullname, g_img_id) VALUES(?, ?, ?, ?, ?, ?)', [uuidv4(), g_user, g_email, hash, g_fullName, uuidv4()], (err) => {
					
					if(err) {
						callback(err.message); 
					}
					
					//console.log('account added .. OK');
				})					
			});
		});
	}
}

this.signin = function (database, g_user_or_email, g_password, callback) {

	//console.log(g_user_or_email);
	//console.log(g_password);

	let sql = 'SELECT * FROM g_account';

	database.all(sql, [], (err, rows) => {

		if (err) {
			throw err;
		}
		
		//console.log(rows);
		for (const item of rows) {

			//console.log(item);
			
			if(item['g_email'] == g_user_or_email) {

				bcrypt.compare(g_password, item['g_password'], function(err, result) {

					//console.log(g_password);
					//console.log(item['g_password']);
					//console.log(result);

					if(result == true) {
		
						callback(200, item['g_username']);
					}
					else {
	
						callback(400, 'null');
					}						
				});		
			}
			else if(item['g_username'] == g_user_or_email) {

				bcrypt.compare(g_password, item['g_password'], function(err, result) {

					//console.log(g_password);
					//console.log(item['g_password']);
					//console.log(result);

					if(result == true) {
		
						callback(200, item['g_username']);
					}
					else {
	
						callback(400, 'null');
					}						
				});		
			}			
		}		
	});
}


this.userLoad = function (database, g_user, callback) {
	
	if(g_user != null) {
	
		//console.log(g_user);

		let sql = 'SELECT * FROM g_account';

		database.all(sql, [], (err, rows) => {

			if (err) {
				throw err;
			}
			
			//console.log(rows);
			for (const item of rows) {

				//console.log(item);
			
				if(item['g_username'] == g_user) {

					callback({"username":item['g_username'], "email":item['g_email'], "fullname":item['g_fullname'], "user_id":item['g_user_id'], "img_id":item['g_img_id']});
				}			
			}		
		});
	}
	else {
		
		callback({"status":400});
	}
}


this.getConversationsById = function (database, g_userID, callback) {

	let sql = 'SELECT * FROM g_conversation';
	database.all(sql, [], (err, rows) => {

		if (err) {
			throw err;
		}
		
		var g_array = [];

		for (const item of rows) {

			//console.log(item);
			
			if(item['g_user_id_s1'] == g_userID) {

				g_array.push(item);
			}
			else if(item['g_user_id_s2'] == g_userID) {

				g_array.push(item);
			}			
		}

		callback(g_array);
	});
}


this.getConversations = function (database, g_user, callback) {
	
	if(g_user != null) {
	
		//console.log(g_user);

		let sql = 'SELECT * FROM g_account';
		database.all(sql, [], (err, rows) => {

			if (err) {
				throw err;
			}
			
			for (const item of rows) {

				//console.log(item);
			
				if(item['g_username'] == g_user) {

					this.getConversationsById(database, item['g_user_id'], function(array) {
						
						callback(array);
					});
				}			
			}		
		});
	}
	else {
		
		callback({"status":400});
	}	
}


this.createChannel = function (database, g_user, channel_name, channel_description, callback) {
	
	if(this.isAlphaNumeric(channel_name) != null) {


		let sql = 'SELECT * FROM g_account';
		database.all(sql, [], (err, rows) => {

			if (err) {
				throw err;
			}
			
			var g_userID;
			var g_userImg;
			
			for (const item of rows) {

				//console.log(item);
				
				if(item['g_username'] == g_user) {
					g_userID = item['g_user_id'];
					g_userImg = item['g_img_id'];
				}
			}	

			var unix = Math.round(+new Date()/1000).toString();

			database.run('INSERT INTO g_channel(g_channel_id, g_created_by, g_created_by_img, g_channel_name, g_user_id, g_user, g_description, g_message_type, g_message_text, g_message_img_id, g_timestamp) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [uuidv4(), g_user, g_userImg, channel_name, g_userID, g_user, channel_description, 'text', 'null', 'null', unix], (err) => {

				if(err) {
					//console.log(err.message); 
				}
				//console.log('channel created Ok');
			});
		});
	}
}


this.getChannels = function (database, g_user, callback) {
	
	if(g_user != null) {
	
		//console.log(g_user);

		let sql = 'SELECT * FROM g_channel';
		database.all(sql, [], (err, rows) => {

			if (err) {
				throw err;
			}
			
			var g_array = [];
			
			for (const item of rows) {

				g_array.push(item);	
			}	

			callback(g_array);
		});
	}
	else {
		
		callback({"status":400});
	}	
}


this.createConversation = function (database, user_s1, user_s2, g_message, callback) {

	if(this.isAlphaNumeric(user_s2) != null) {


		let sql = 'SELECT * FROM g_account';
		database.all(sql, [], (err, rows) => {

			if (err) {
				throw err;
			}
			
			var g_userID_s1;
			var g_userID_s2;
			
			for (const item of rows) {

				//console.log(item);
				
				if(item['g_username'] == user_s1) {
					g_userID_s1 = item['g_user_id'];
				}
				else if(item['g_username'] == user_s2) {
					g_userID_s2 = item['g_user_id'];
				}
			}	

			var unix = Math.round(+new Date()/1000).toString();

			database.run('INSERT INTO g_conversation(g_conversation_id, g_user_id_s1, g_user_id_s2, g_user_s1, g_user_s2, g_message_type, g_message_text, g_message_img_id, g_timestamp) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)', [uuidv4(), g_userID_s1, g_userID_s2, user_s1, user_s2, 'text', g_message, 'null', unix], (err) => {

				if(err) {
					//console.log(err.message); 
				}
				//console.log('created Ok');
			});
		});
	}
}

this.postUpload = function (database, callback) {
	
	app.post('/upload', upload.single('avatar'), function (req, res, next) {
		
		var sess = req.session;
		var file_pathv2 = "/static/generated/" + req.file.filename + path.extname(req.file.originalname);

		let data = [file_pathv2, sess.user];
		let sql = 'UPDATE g_account SET g_img_id = ? WHERE g_username = ?';
		database.run(sql, data, function(err) {
		  
			if (err) {
				callback(err.message);
			}
			//console.log('upload ok');
		});
	});
}




this.sendChannelMessage = function (database, g_user, g_channel_name, g_message, callback) {
	

	if(this.isAlphaNumeric(g_channel_name) != null) {


		let sql = 'SELECT * FROM g_account';
		database.all(sql, [], (err, rows) => {

			if (err) {
				throw err;
			}
			
			var g_userID;
			var g_userImg;
			
			for (const item of rows) {

				//console.log(item);
				
				if(item['g_username'] == g_user) {
					g_userID = item['g_user_id'];
					g_userImg = item['g_img_id'];
				}
			}	

			var unix = Math.round(+new Date()/1000).toString();

			database.run('INSERT INTO g_channel(g_channel_id, g_created_by, g_created_by_img, g_channel_name, g_user_id, g_user, g_description, g_message_type, g_message_text, g_message_img_id, g_timestamp) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [uuidv4(), 'null', 'null', g_channel_name, g_userID, g_user, 'null', 'text', g_message, 'null', unix], (err) => {

				if(err) {
					//console.log(err.message); 
				}
				//console.log('channel message sent');
			});
		});
	}	
}


this.getIcons = function (database, g_user, callback) {
	
	let sql = 'SELECT * FROM g_account';
	database.all(sql, [], (err, rows) => {
		
		if (err) {
			throw err;
		}
		
		var array = [];
		for (const item of rows) {

			array.push({"g_user":item["g_username"], "g_img_id":item['g_img_id']});
		}
		callback(array);
	});
}


this.get = function (url, callback) {
	
	app.get(url, function(req, res, next) {
		
		callback(req, res, next);
	});
}


this.post = function (url, callback) {
	
	app.post(url, function(req, res) {
		
		callback(req, res);
	});
}


this.listen = function (port) {

	// listen
	server.listen(port);
}












