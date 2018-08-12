var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('watch', function () {
    watch('./app/**/*.pug', function() {
        gulp.start('pug');
    });
    watch('./app/**/*.css', function() {
        gulp.start('css');
    });
});