var gulp = require('gulp');

gulp.task('less', function() {
    var sourcemaps = require('gulp-sourcemaps'),
        less = require('gulp-less');

    gulp.src('./client/less/main.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('watch-less', function() {
    gulp.watch('./client/less/**/*.less', ['less']);
});
