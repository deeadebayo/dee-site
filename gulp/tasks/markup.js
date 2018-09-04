var pug = require('gulp-pug'),
    pugLinter = require('gulp-pug-linter'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');

// add these in - https://www.npmjs.com/package/gulp-pug-linter

// Set up an object with the path variables - use variables in functions
var devPaths = {
    // base:
    // img:
    html: './app/**/*.pug',
    styleFile: './app/assets/scss/styles.scss',
    styles: './app/assets/scss/'
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
    gulp.src(devPaths.html)
        .pipe(pug({
            pretty: false,
        }))
        .pipe(pugLinter())
        .pipe(pugLinter.reporter('fail'))
        .pipe(gulp.dest(webPaths.html));
    console.log('Your HTML is served!');
});

gulp.task('sass', function () {
    gulp.src(devPaths.styleFile)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 3 versions'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(webPaths.styles));
    console.log('Your css is styled!');
});