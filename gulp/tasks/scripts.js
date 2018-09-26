const gulp = require('gulp'),
    webpack = require('webpack'),
    eslint = require('gulp-eslint'),

    rawDir = {
        scripts: './app/assets/js/**/*.js'
    },
    serveDir = {

    },
    configDir = {
        webpack: '../../webpack.config.js'
    };


    gulp.task('lint', function () {
        return gulp.src(rawDir.scripts)
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
    });

    gulp.task('scripts', (callback) => {
        webpack(require(configDir.webpack), (err, stats) => {
            if(err) {
                console.warn(err.toString());
            }
            console.warn(stats.toString());
            callback();
        });
    });
    
    // gulp.task('scripts', function () {
    //     gulp.src(devPaths.scripts)
    //         .pipe(debug({
    //         title: 'js file:'
    //         }))
    //         .pipe(sourcemaps.init())
    //         .pipe(babel())
    //         .pipe(concat('script.js'))
    //         .pipe(uglify())
    //         .pipe(sourcemaps.write())
    //         .pipe(gulp.dest(webPaths.scripts));
    // });

    // gulp.task('scripts', function () {
    //     gulp.src(devPaths.scripts)
    //         .pipe(debug({
    //         title: 'js file:'
    //         }))
    //         .pipe(sourcemaps.init())
    //         .pipe(babel())
    //         .pipe(concat('script.js'))
    //         .pipe(uglify())
    //         .pipe(sourcemaps.write())
    //         .pipe(gulp.dest(webPaths.scripts));
    // });