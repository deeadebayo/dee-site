const gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,

    // Path/Directory variables
    rawDir = {
        img: './app/assets/img/*',
        html: './app/*.pug',
        styleFile: './app/assets/scss/styles.scss',
        styles: './app/assets/scss/**/*.scss',
        scripts: './app/assets/js/**/*.js'
    },

    serveDir = {
        // img: './dist/public/img/',
        html: './dist',
        styleFile: '/dist/public/css/styles.css',
        styles: './dist/public/css/',
        //scripts: './dist/public/js/'
    };

gulp.task('watch', () => {
    browserSync.init({
        open: false,
        injectChanges: true,
        server: {
            baseDir: 'dist'
        }
    });

    watch(rawDir.html, () => {
        gulp.start('html');
        reload();
    });

    // watch(rawDir.styles, () => {
    //     gulp.start('cssInject');
    // });
    gulp.watch(rawDir.styles, ['sass']);
    
    watch(rawDir.img, () => {
        gulp.start('images');
        reload();
    });
    
    watch(rawDir.scripts, () => {
        gulp.start('scriptsRefresh');
    });
});

gulp.task('cssInject', ['sass'], () => {
    return gulp.src(serveDir.styleFile)
        .pipe(browserSync.stream());
});

gulp.task('default', ['scripts', 'html', 'sass', 'images', 'watch'], () => {
    // eslint-disable-next-line no-console
    console.log('Let the watch party begin!!');
});

gulp.task('build', ['scripts', 'html', 'sass', 'images']);

gulp.task('scriptsRefresh', ['scripts'], () => {
    reload();
});