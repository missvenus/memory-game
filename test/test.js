var assert = require("chai").assert;
var http   = require("http");
var server = require("../index");
var host = "http://localhost:4041"
var cheerio = require('cheerio');
var $;   


   before(function(done){
   	var chunks = [];
   	http.get(host, function (res) {        
       res.on("data", function (data) {
            chunks.push(data);
            $ = cheerio.load(chunks.join(""));
        });

    });
    
    done();
  }); 
    

it("should return a 200 response", function (done) {

    //var app = server();

    http.get(host, function (res) {
        assert.equal(res.statusCode, 200);
       done();
    });
});

it("should return the correct HTML", function (done) {


    http.get(host, function (res) {

        var chunks = [];
        res.on("data", function (data) {
            chunks.push(data);
        }).on("end", function () {
            assert.isTrue(chunks.join("").indexOf("</html>") > 0);
            done();
        });

    });
});

it("should have all the tiles", function (done) {

var exp_tiles = []
	for (i = 0; i < 24; i++) { 
    exp_tiles.push("tile_"+i);
}

var act_tiles = [];
   $('.tile').each(function(i, html) {
    var tile = $(html).attr('id');
     act_tiles.push(tile);
  });

assert.deepEqual(exp_tiles, act_tiles);
done();
});



