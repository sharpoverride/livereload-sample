var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('html', function () {
    gulp.src('./public/*.html')
    .pipe(connect.reload());
});

gulp.task('watch-html', function() {
    var watch = require('gulp-watch');
    watch('./public/**/*.*', ['html']).pipe(connect.reload());
    connect.server({
        root: ['public'],
        port: 8000,
        livereload: true
    });

});
