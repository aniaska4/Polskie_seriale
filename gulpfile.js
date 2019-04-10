var gulp = require("gulp");
var sass = require('gulp-sass');
var plumber = require("gulp-plumber");
var sourcemaps = require("gulp-sourcemaps");


gulp.task("sass", function(){
    return gulp.src("scss/**/*.scss")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({errorLogToConsole: true, outputStyle:"compact"}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("css")); /*to nasz docelowy folder */
});

gulp.task("watch", function(){
    gulp.watch("scss/**/*.scss", ["sass"]); /* obserwuj zmianę po zapisach i zrób to */
});

