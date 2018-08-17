var gulp = require('gulp'),
    pug = require('gulp-pug'),
    postcss = require('gulp-postcss'),
    pugLinter = require('gulp-pug-linter'),
    sourcemaps = require('gulp-sourcemaps');


// var err = error('MY_CODE', 'there is an error on this line', {})

// Set up an object with the path variables - use variables in functions
// var devPaths = {
//     base:
//     img:
//     tmpl:
//     script:
//     fonts:
// };

// var webPaths = {
//     base:
//     img:
//     tmpl:
//     script:
//     fonts:
// };

gulp.task('pug', function () {
    console.log('Processed HTML');
    return gulp.src('./app/**/*.pug')
    .pipe(pug({
        pretty: false,
    }))
    .pipe(pugLinter())
    .pipe(pugLinter.reporter('fail'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('css', function () {
    var plugins = [
        //plugins and options
    ];
    return gulp.src('./app/assets/scss/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/public/css/'));
});