var gulp = require('gulp'),
    sync = require('browser-sync'),
    watch = require('gulp-watch'),
    reload = sync.reload,

    devPaths = {
        // base:
        // img:
        html: './app/**/*.pug',
        styleFile: './app/assets/scss/styles.scss',
        styles: './app/assets/scss/**/*.scss'
        // script:
        // fonts:
    };


gulp.task('pug-watch', ['pug'], reload);

gulp.task('watch', ['sass', 'pug'], function() {
    sync({
        server: './dist'
    });

    watch(devPaths.styles, ['sass']);
    watch(devPaths.html, ['pug-watch']);
});