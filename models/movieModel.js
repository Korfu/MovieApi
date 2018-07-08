// Loading modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Here we create a constructor template for a movie object
var movieModel = new Schema({
    i: {
        type:String
    },
    t: {
        type:String
    },
    type: {
        type:String
    },
    y:{
        type:Boolean, default: false
    },
    plot:{
        type:String, default:'short'
    },
    r: {
        type:String, default: 'json'
    },
    callback: {
        type: String
    },
    v: {
        type: Number
    }

});

// We load this model into mongoose, so we get an instance of it in our app.js
module.exports=mongoose.model('Movie', movieModel);