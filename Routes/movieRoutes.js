var express = require('express');
var request = require('request');



var routes = function(Movie) {
    var movieRouter = express.Router();
    var movieController = require('../controllers/movieController.js')(Movie);
    movieRouter.route('/')
    // .post(function(req,res){        
    //     var movie = new Movie(req.body);
    //     //this will save our movie in application database
    //     movie.save()
    //     res.status(201).send(movie);
    //     })

            // Asking external API for resources    
    .post(movieController.post)
    .get(movieController.get)
        
    movieRouter.route('/:i')
    .get(function(req,res){
        
        Movie.findById(req.params.i, function(err,movie){
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(movie);
            }
        });
    });
    return movieRouter;
};

module.exports = routes;