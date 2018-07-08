// Loading modules
var express = require('express');
var mongoose = require('mongoose'); //parsing db files to json format
var request = require('request');
var bodyParser = require('body-parser');

// Connection to database
var db = mongoose.connect('mongodb://localhost:27017/mydb');

// Mongoose uses model to parse data from MongoDB
var  Movie = require('./models/movieModel');
// Instantiating app
var app = express();

// Port choice, default from environment, alternatively 3000 to verify the source
var port = process.env.PORT || 3000;

//bparsing API request body to json 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Here we specify routes for HTTP requests
    //instantiating our Router
    var movieRouter = express.Router();

    movieRouter.route('/movies')
    .post(function(req,res){        
        var movie = new Movie(req.body);
        //this will save our movie in application database
        movie.save()
        res.stastus(201).send(movie);

        })
    .get(function(req,res){

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
                    res.json(movies);
                }
            })

            // Asking external API for resources    
            // .get(function(req,res,next){
            //     request({
            //         uri: ' http://www.omdbapi.com/?i=tt3896198&apikey=7776cbde',
            //         qs: {
            //             api_key: '7776cbde',
            //             t: 'Me'
            //         }
            //     }).pipe(res);

        
        

        })
        
    movieRouter.route('/movies/:i')
    .get(function(req,res){
        
        Movie.findById(req.params.i, function(err,movie){
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(movie);
            }
        });
    });

    app.use('/api', movieRouter);

    //myApiKey : 7776cbde
    //Send all data requests to : http://www.omdbapi.com/?apikey=[7776cbde]&
    //Poster API requests: http://img.omdbapi.com/?apikey=[7776cbde]&


// What we get in the homepage of local host
app.get('/', function(req,res){
    res.send('Welcome to Konrad API');
});

// Confirmation on which port I am running
app.listen(port,function(){
    console.log('Gulp is running on PORT: ' + port )
});