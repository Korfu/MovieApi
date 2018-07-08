//loading modules
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

//when we type 'gulp' in Gitbash, this will be executed as default
//we use it to reflect live changes in the code without restarting in bash
gulp.task('default',function(){
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT:8000
        },
        ignore: ['./node_modules/**']
    })
    .on('restart',function(){
        console.log("Restarting");
    });
});