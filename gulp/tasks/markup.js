var gulp = require('gulp'),
    pug = require('gulp-pug'),
    postcss = require('gulp-postcss'),
    pugLinter = require('gulp-pug-linter'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    precss = require('precss');


// var err = error('MY_CODE', 'there is an error on this line', {})

// Set up an object with the path variables - use variables in functions
var devPaths = {
    // base:
    // img:
    tmpl: './app/**/*.pug',
    styles: './app/assets/scss/**/*.css'
    // script:
    // fonts:
};

var webPaths = {
//     base:
//     img:
    tmpl: './dist',
    styles: './dist/public/css/'
//     script:
//     fonts:
};

gulp.task('pug', function () {
    console.log('Processed HTML');
    return gulp.src(devPaths.tmpl)
    .pipe(pug({
        pretty: false,
    }))
    .pipe(pugLinter())
    .pipe(pugLinter.reporter('fail'))
    .pipe(gulp.dest(devPaths.tmpl));
});

gulp.task('css', function () {
    var plugins = [
        autoprefixer(),
        precss(),
    ];
    
    return gulp.src(devPaths.styles)
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe(autoprefixer('last 3 versions'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(webPaths.styles));
});