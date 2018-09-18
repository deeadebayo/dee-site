var gulp = require('gulp'),
    sync = require('browser-sync'),
    watch = require('gulp-watch'),
    reload = sync.reload(),

    devPaths = {
        img: './app/assets/img/*',
        html: './app/*.pug',
        styleFile: './app/assets/scss/styles.scss',
        styles: './app/assets/scss/**/*.scss',
        scripts: './app/assets/js/**/*.js'
    };

gulp.task('setWatch', () => {
    global.isWatching = true;
});

gulp.task('pug-watch', ['setWatch','pug'], reload);

gulp.task('watch', [ 'lint', 'sass', 'pug'], () => {
    sync({
        server: './dist'
    });

    watch(devPaths.scripts, ['lint']);
    watch(devPaths.styles, ['sass']);
    watch(devPaths.html, ['pug-watch']);
    //watch(devPaths.img, ['images']);
});