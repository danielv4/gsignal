# GSignal
IRC-style server for managing direct messages, channels and chat rooms.

Install NodeJS 14.x

```
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
apt-get -y install nodejs
```

Dependencies

```
npm install --save express
npm install --save express-session
npm install --save body-parser
npm install --save uuid
npm install --save sqlite3
npm install --save request
npm install --save multer
```


Usage 

```
const gsignal = require("./gsignal.js");

gsignal.boot(gsignal.database, true);

gsignal.get('/signin', function(req, res) {
	// http router	
});

gsignal.get('/signup', function(req, res) {
	// http router
});

gsignal.get('/logout', function(req, res) {
	// http router
});

gsignal.get('/dash', function(req, res) {
	// http router
});

gsignal.post('/api', function(req, res) {
	// http router
});

gsignal.listen(8080);
```

