var gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    log = require('fancy-log'),
    sync = require('browser-sync'),
    reload = sync.reload,
    eslint = require('gulp-eslint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    pugInheritance = require('gulp-pug-inheritance'),
    changed = require('gulp-changed'),
<<<<<<< HEAD
    cached = require('gulp-cached'),
    gulpif = require('gulp-if'),
    filter = require('gulp-filter'),
=======
    debug = require('gulp-debug'),
>>>>>>> master
    // jasmine = require('gulp-jasmine-phantom'),

    // Set up an object with the path variables - use variables in functions
    devPaths = {
        img: './app/assets/img/*',
        html: './app/**/*.pug',
        htmlPartial: '!./app/**/*.pug', //not this
        styleFile: './app/assets/scss/styles.scss',
        styles: './app/assets/scss/**/*.scss',
        scripts: './app/assets/js/**/*.js'
    },

    webPaths = {
        img: './dist/public/img/',
        html: './dist',
        styles: './dist/public/css/',
        scripts: './dist/public/js/'
    };

gulp.task('lint', function () {
    return gulp.src(devPaths.scripts)
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});

/** blocking out for unit testing */
// gulp.task('tests', function () {
//         return gulp.src('tests/spec/extraSpec.js')
//             .pipe(jasmine({
//                     integration: true,
//             vendor: './app/assets/js/**/*.js'
//         }));
// }); 

gulp.task('scripts', function () {
    gulp.src(devPaths.scripts)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('script.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(webPaths.scripts));
});

gulp.task('scripts-dist', function () {
    gulp.src(devPaths.scripts)
        .pipe(babel())
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest(webPaths.scripts));
});

gulp.task('pug', function () {
    return gulp.src([
<<<<<<< HEAD
        devPaths.html, 
        devPaths.htmlPartial
    ])
        .pipe(changed('./dist', {
=======
            devPaths.html,
            devPaths.htmlPartial
        ])
        .pipe(debug({title: 'myWatcher:'}))
        .pipe(changed('./', {
>>>>>>> master
            extension: '.html'
        }))
        .pipe(gulpif(global.isWatching, cached('pug')))
        .pipe(pugInheritance({
            basedir: './app',
<<<<<<< HEAD
            skip: 'node_modules'
=======
            skip: 'node_modules/'
>>>>>>> master
        }))
        .pipe(filter(function (file) {
            return !/\/_/.test(file.path) && !/^_/.test(file.relative);
        }))
        .pipe(pug({
            locals: {},
            pretty: false,
        }))
        .pipe(gulp.dest(webPaths.html))
        // .on('end', function () {
        //     log('HTML Processed!');
        // });
});

gulp.task('sass', function () {
    return gulp.src(devPaths.styleFile)
        .pipe(debug({title: 'myWatcher:'}))
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        })).on('error', sass.logError)
        .pipe(sourcemaps.write())
        .pipe(autoprefixer('last 3 versions'))
        .pipe(gulp.dest(webPaths.styles))
        .pipe(reload({
            stream: true
        }))
        .on('end', function () {
            log('CSS Injected!');
        });
});