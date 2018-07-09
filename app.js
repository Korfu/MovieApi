// Loading modules
var express = require('express');
var mongoose = require('mongoose'); //parsing db files to json format
var bodyParser = require('body-parser');

// Connection to database
var db = mongoose.connect('mongodb://korfu92:korfu92@ds018848.mlab.com:18848/konraddb');

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

movieRouter = require('./Routes/movieRoutes')(Movie);
commentRouter = require('./Routes/commentRoutes')(Movie);

app.use('/api/movies', movieRouter);
app.use('/api/comments', commentRouter);

// What we get in the homepage of local host
app.get('/', function(req,res){
    res.send('Welcome to Konrad API');
});

// Confirmation on which port I am running
app.listen(port,function(){
    console.log('Gulp is running on PORT: ' + port )
});