var GM = require('../modals/game');

module.exports = function(app) {

// main page //
	app.get('/', function(req, res){

		// Render views/home.html
		GM.generateBoard(function(e,board_html){
          res.render('memory', {board: board_html});
		})
		
	});

	


// creating new accounts //
	
    app.get('/flip', function(req, res){
		console.log("clicked");
	});


}