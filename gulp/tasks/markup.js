var gulp = require('gulp'),
    pug = require('gulp-pug'),
    error = require('pug-error'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps');


// var err = error('MY_CODE', 'there is an error on this line', {})

gulp.task('pug', function () {
    console.log('Processed HTML');
    return gulp.src('./app/**/*.pug')
    .pipe(pug({
        //add options in here
    }))
    .pipe(gulp.dest('./app'));
});

gulp.task('css', function () {
    var plugins = [
        //plugins and options
    ];
    return gulp.src('./app/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./app/public/css/'));
});