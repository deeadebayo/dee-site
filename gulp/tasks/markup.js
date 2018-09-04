var gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    log = require('fancy-log'),
    sync = require('browser-sync'),
    reload = sync.reload;

// add these in - https://www.npmjs.com/package/gulp-pug-linter

// Set up an object with the path variables - use variables in functions
var devPaths = {
    // base:
    // img:
    html: './app/**/*.pug',
    styleFile: './app/assets/scss/styles.scss',
    styles: './app/assets/scss/**/*.scss'
    // script:
    // fonts:
};

var webPaths = {
    //     base:
    //     img:
    html: './dist',
    styles: './dist/public/css/'
    //     script:
    //     fonts:
};

gulp.task('pug', function () {
    return gulp.src(devPaths.html)
        .pipe(pug({
            pretty: false,
        }))
        .pipe(gulp.dest(webPaths.html))
        .on('end', function() {
            log('HTML Processed!');
        });
});

gulp.task('sass', function () {
    return gulp.src(devPaths.styleFile)
        .pipe(sass()).on('error', sass.logError)
        .pipe(autoprefixer('last 3 versions'))
        .pipe(gulp.dest(webPaths.styles))
        .pipe(reload({
            stream: true
        }))
        .on('end', function() {
            log('CSS Injected!');
        });
});