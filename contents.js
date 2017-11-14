
var gulpfileContent = `
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var exec = require('child_process').exec;
var reload      = browserSync.reload;
var stylus = require('gulp-stylus');

// Servidor
gulp.task('browser-sync',function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./public/stylus/*.styl",['stylus']);
    gulp.watch('./public/css/style.css').on("change", reload);
    gulp.watch("./public/js/*.js").on("change", reload);
    gulp.watch("./index.html").on("change", reload);
    gulp.watch("./index.js").on("change", reload);
});


//Watch todos os .styl
gulp.task('stylus', function(){
    return gulp.src('./public/stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./public/css/'));
})


gulp.task('default', ['browser-sync'], function(){
   console.log("Gulp Iniciado");
})
`
var indexJSContent = `
const express = require('express')
const app = express()
const gutil = require('gulp-util')
var bodyParser = require('body-parser')

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
`

var indexHTMLContent = `
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <title>Your title here</title>
    <link rel="stylesheet" href="public/css/style.css">
    <link rel="icon" href="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png" /> <!--Your favicon here-->
  </head>
  <body>

    <h1>Hello World!</h1>
    <p>It's full of opportunities here :D </p>

    <script src="public/js/script.js"></script>
  </body>
</html>
`

module.exports = {
    gulpfileContent,
    indexJSContent,
    indexHTMLContent
}