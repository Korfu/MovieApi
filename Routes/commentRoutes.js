var express = require('express');
var request = require('request');

var routes = function(Movie) {
    var commentRouter = express.Router();
    var commentController = require('../controllers/commentController.js')(Movie);
    commentRouter.route('/')
    .post(commentController.post)
    .get(commentController.get)
        
    commentRouter.route('/:i')
    .get(function(req,res){
        
        Movie.findById(req.params.i, function(err,movie){
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(movie.comment);
            }
        });
    });
    return commentRouter;
};

module.exports = routes;