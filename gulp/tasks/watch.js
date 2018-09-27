const gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create(),

    // Path/Directory variables
    rawDir = {
        //img: './app/assets/img/*',
        html: './app/*.pug',
        styleFile: './app/assets/scss/styles.scss',
        styles: './app/assets/scss/**/*.scss',
        scripts: './app/assets/js/**/*.js'
    },

    serveDir = {
        //img: './dist/public/img/',
        html: './dist',
        styleFile: '/dist/public/css/styles.css',
        styles: './dist/public/css/',
        //scripts: './dist/public/js/'
    };

gulp.task('watch', () => {
    browserSync.init({
        server: {
            injectChanges: true,
            baseDir: 'dist'
        }
    });

    watch(rawDir.html, () => {
        gulp.start('html');
        browserSync.reload();
    });

    watch(rawDir.styles, () => {
        gulp.start('cssInject')
        // browserSync.reload();
    });

    watch(rawDir.scripts, () => {
        gulp.start('scriptsRefresh');
    });
});

gulp.task('cssInject', ['sass'], () => {
    return gulp.src(serveDir.styleFile)
        .pipe(browserSync.stream());
});

gulp.task('default', ['html', 'sass', 'watch']);

gulp.task('scriptsRefresh', ['scripts'], () => {
    browserSync.reload();
});