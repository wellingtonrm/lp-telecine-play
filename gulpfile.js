var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp
        .src('./src/assets/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/assets/css/'));
});

gulp.task('watch', function () {
    return gulp 
        .watch('./src/assets/scss/*.scss', gulp.series('sass'));
});