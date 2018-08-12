var gulp = require('gulp'),
    pug = require('gulp-pug'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps');


// gulp.task('task-name', function () {
//     return gulp.src('source-files') // Get source files with gulp.src
//       .pipe(aGulpPlugin()) // Sends it through a gulp plugin
//       .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
// });

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

gulp.task('watch', function() {
    watch('./app/**/*.pug', ['pug']);
    watch('./app/**/*.css', ['css']);
});
