const gulp = require('gulp'),
    watch = require('gulp-watch'),
    sync = require('browser-sync').create(),
    reload = sync.reload,

    devPaths = {
        img: './app/assets/img/*',
        html: './app/**/*.pug',
        styleFile: './app/assets/scss/styles.scss',
        styles: './app/assets/scss/**/*.scss',
        scripts: './app/assets/js/**/*.js'
    };

gulp.task('pug-watch', ['pug'], reload);

gulp.task('watch', ['lint', 'sass', 'pug'], () => {
    sync.init({
        notify: true,
        injectChanges: true,
        server: {
            baseDir: './dist'
        }
    });

    watch(devPaths.scripts, ['lint']);
    watch(devPaths.styles, ['sass']);
    watch(devPaths.html, () => {
        gulp.start('pug-watch');
    });
    //watch(devPaths.img, ['images']);
});

//lite-server --baseDir="dist"