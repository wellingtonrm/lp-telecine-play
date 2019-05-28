const gulp         = require('gulp');
var   sass         = require('gulp-sass');
var   autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', ()=>
 gulp.src('./src/assets/scss/*.scss')
 .pipe(sass())
 .pipe(gulp.dist()'.')
);