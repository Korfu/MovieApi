//loading modules
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var connect = require('connect');
var gulpMocha = require('gulp-mocha');

//when we type 'gulp' in Gitbash, this will be executed as default
//we use it to reflect live changes in the code without restarting in bash
gulp.task('default',function(){
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT: process.env.PORT || 8000
        },
        ignore: ['./node_modules/**']
    })
    connect.server({
        root: ['https://floating-hamlet-97079.herokuapp.com/'],
        port: process.env.PORT || 5000, // localhost:5000
        livereload: false
      })
    .on('restart',function(){
        console.log("Restarting");
    });
});

gulp.task('test',function(){
    gulp.src('Tests/*.js',{read:false})
.pipe(gulpMocha({reporter:'nyan'}))
});