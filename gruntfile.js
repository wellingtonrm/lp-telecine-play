var   gulp         = require('gulp');
var   sass         = require('gulp-sass');
var   autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function(){
 return gulp

 .src('./src/assets/scss/*.scss')
 //.pipe(sassGlob())
 .pipe(sass())
 .pipe(gulp.dest('./public/assets/css/*.css'))
});