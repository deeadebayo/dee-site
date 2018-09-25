const gulp = require('gulp'),
    pug = require('gulp-pug'),
    pugInheritance = require('gulp-pug-inheritance'),
    changed = require('gulp-changed'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    log = require('fancy-log'),
    sync = require('browser-sync'),
    reload = sync.reload,
    eslint = require('gulp-eslint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    debug = require('gulp-debug'),
    webpack = require('webpack'),
    webpackStream = require('webpack-stream'),

    // set up path variables
    devPaths = {
        img: './app/assets/img/*',
        html: './app/**/*.pug',
        htmlPartial: '!./app/jade-templates/*.pug', //not this
        styleFile: './app/assets/scss/styles.scss',
        styles: './app/assets/scss/**/*.scss',
        scripts: './app/assets/js/**/*.js'
    },

    webPaths = {
        img: './dist/public/img/',
        html: './dist',
        styles: './dist/public/css/',
        scripts: './dist/public/js/'
    },

    //Then some leave some options in objects for compact tasks
    sassOptions = {
        outputStyle: 'compressed'
    },
    
    prefixerOptions = {
        browsers: ['last 3 versions']
    };

// ================================== Now, for tasks. =======================================================
gulp.task('lint', function () {
    return gulp.src(devPaths.scripts)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('scripts', function () {
    gulp.src(devPaths.scripts)
        .pipe(debug({
        title: 'js file:'
        }))
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(webPaths.scripts));
});

gulp.task('pug', function () {
    return gulp.src([
            devPaths.html,
            devPaths.htmlPartial
        ])
        .pipe(debug({
            title: 'Staging:'
        }))
        .pipe(changed('dist', {
            extension: '.html'
        }))
        .pipe(debug({
            title: 'Files Changed:'
        }))
        .pipe(pugInheritance({
            basedir: './app',
            skip: 'node_modules/'
        }))
        .pipe(debug({
            title: 'Files Built:'
        }))
        .pipe(pug({
            locals: {},
            pretty: false
        }))
        .pipe(gulp.dest(webPaths.html))
        .on('end', function () {
            log('HTML Processed! =)');
        });
});

gulp.task('sass', function () {
    return gulp.src(devPaths.styleFile)
        .pipe(debug({
            title: 'scss file:'
        }))
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions)).on('error', sass.logError)
        .pipe(postcss([
            autoprefixer(prefixerOptions)
        ]))
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest(webPaths.styles))
        .on('end', function () {
            log('CSS Injected!');
        })
        .pipe(reload({
            stream: true
        }));
});