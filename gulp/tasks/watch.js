const gulp = require('gulp'),
watch = require('gulp-watch'),
sync = require('browser-sync'),
    reload = sync.reload(),

    devPaths = {
        img: './app/assets/img/*',
        html: './app/**/*.pug',
        styleFile: './app/assets/scss/styles.scss',
        styles: './app/assets/scss/**/*.scss',
        scripts: './app/assets/js/**/*.js'
    };

gulp.task('pug-watch', ['pug'], reload);

gulp.task('watch', [ 'lint', 'sass', 'pug'], () => {
    sync({
        server: './dist'
    });

    watch(devPaths.scripts, ['lint']);
    watch(devPaths.styles, ['sass']);
    watch(devPaths.html, ['pug-watch']);
    //watch(devPaths.img, ['images']);
});