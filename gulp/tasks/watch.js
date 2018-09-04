var watch = require('gulp-watch');

gulp.task('watch', function () {
    watch(devPaths.html, function() {
        gulp.start('pug');
    });
    
    watch(devPaths.styles, function() {
        gulp.start('sass');
    });
});