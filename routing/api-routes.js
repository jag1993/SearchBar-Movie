var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var omdb = require('omdb');


module.exports = function(app,models){
app.get('/api/:movie?', function (req, res) {	
	var movieToSearch = req.params.movie;
	omdb.search(movieToSearch, function(err,movies){
		if(err){
			console.log(err);
		}else{
			if(movies.length<1){
				console.log('No movies were found');
			}
		res.send(movies);
		}
	})
	})

}


