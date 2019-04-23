const {watch, task, src, series, parallel}= require('gulp'),
    // watch = require('gulp-watch'),
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

task('watch', () => {
    browserSync.init({
        open: false,
        injectChanges: true,
        server: {
            baseDir: 'dist'
        }
    });

    watch(rawDir.html, () => {
        series('compilePug');
        reload();
    });

    // watch(rawDir.styles, () => {
    //     gulp.start('cssInject');
    // });
    watch(rawDir.styles, series('compileSass'));
    
    watch(rawDir.img, () => {
        series('imgTask');
        reload();
    });
    
    watch(rawDir.scripts, () => {
        series('scriptsRefresh');
    });
});

task('cssInject', series('compileSass', () => {
    return src(serveDir.styleFile)
        .pipe(browserSync.stream());
}));

task('default', series(parallel('scriptTask', 'markupTask', 'imgTask'), 'watch', () => {
    // eslint-disable-next-line no-console
    console.log('Let the watch party begin!!');
}));

task('build', parallel('scriptTask', 'markupTask', 'imgTask'));

task('scriptsRefresh', series('scriptTask', () => {
    reload();
}));