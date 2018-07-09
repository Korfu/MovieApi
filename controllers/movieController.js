var request = require('request');

var movieController = function(Movie) {
    var post = function(req,res,element){
        var newMovie = {};
        newMovie = res.body;
        newMovie.save();

        if (!req.body.t){
            res.status(400);
            res.send('Title is required in a format {"t":"title"}');
        } else {
            //movie.save();
            res.status(201);
            res.send(newMovie);
        }
    }
    var get = function(req,res){

        var query = {};

        if (req.query.t) {
            query.t = req.query.t;
        }

        if (req.query.i) {
            query.i = req.query.i;
        }

        Movie.find(query, function(err,movies){
            if (err) {
                res.status(500).send(err);
            } else {
                var returnMovies = [];
                movies.forEach(function(element,index,array){
                    var newMovie = element.toJSON();
                    newMovie.links={};
                    newMovie.links.self = 'http://' + req.headers.host +'/api/movies/' + newMovie._id;
                    returnMovies.push(newMovie);
                })

                res.json(returnMovies);
            }
        })
    }

    return {
        post: post,
        get: get
    }
}

module.exports = movieController;