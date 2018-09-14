var gulp = require('gulp');

gulp.task('dist', [
    'pug',
    //'images',
    'sass',
    'lint',
    'scripts-dist'
]);