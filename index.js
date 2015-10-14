// This is the main file of our chat app. It initializes a new 
// express.js instance, requires the config and routes files
// and listens on a port. Start the application by running
// 'node app.js' in your terminal

var bodyParser = require('body-parser');
var express = require('express'),
	app = express();

// This is needed if the app is run on heroku:

var port = process.env.PORT || 4041;

 // Set .html as the default template extension
	app.set('view engine', 'html');

	// Initialize the ejs template engine
	app.engine('html', require('ejs').renderFile);

	// Tell express where it can find the templates
	app.set('views', __dirname + '/views');

	// Make the files in the public folder available to the world
	app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port);

require('./controller/routes')(app);

console.log('Your application is running on http://localhost:' + port);
