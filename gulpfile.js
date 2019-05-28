/*global require*/
(function (r) {
    "use strict";
    var scss = r("gulp-scss");
    var gulp = r("gulp");

    gulp.task("scss", function () {
        gulp.src("src/assets/scss/**/*.scss")
        .pipe(scss({ "bundleExec": true }))
        .pipe(gulp.dest("src/assets/css"));
    });
}(require));
