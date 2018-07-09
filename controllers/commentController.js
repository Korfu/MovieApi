var commentController = function(Movie) {
    var post = function(req,res){        
        movie.comment = req.body.comment;
        res.status(201).json(movie.comment);

    }
    var get = function(req,res){
        Movie.find(function(err,movies){
            if (err) {
                res.status(500).send(err);
            } else {
                var response = [];
                var i =0;
                movies.forEach(movie => {
                    if (movie.comment) {(response[i]=movie.comment)}
                     i++;
                });
                res.json(response);  
            }
        })
    }

    return {
        post: post,
        get: get
    }
}

module.exports = commentController;