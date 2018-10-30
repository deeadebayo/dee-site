const gulp = require('gulp'),
    debug = require('gulp-debug'),
    pug = require('gulp-pug'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    browserSync = require('browser-sync'),
    // modularscale = require('modularscale-sass'),
    // reload = browserSync.reload,

    // Path/Directory variables
    rawDir = {
        html: './app/**/*.pug',
        nothtmlPartial: '!./app/pug-templates/*.pug', //not this
        styleFile: './app/assets/scss/styles.scss',
        styles: './app/assets/scss/**/*.scss',
    },
    serveDir = {
        html: './dist',
        styles: './dist/public/css/',
    },

    // Options in objects
    sassOptions = {
        outputStyle: 'compressed',
        // includePaths: [
        //     rawDir.styleFile,
        //     rawDir.styles,
        //     './node_modules/modularscale-sass/stylesheets/'
        // ]
    },
    prefixerOptions = {
        browsers: ['last 3 versions']
    };


gulp.task('html', () => {
    return gulp.src([
            rawDir.html,
            rawDir.nothtmlPartial
        ])
        .pipe(debug({
            title: 'staging pug:'
        }))
        .pipe(pug({
            locals: {},
            pretty: false
        }))
        .pipe(debug({
            title: 'processed:'
        }))
        .pipe(gulp.dest(serveDir.html));
});

gulp.task('sass', () => {
    return gulp.src(rawDir.styleFile)
    .pipe(debug({
        title: 'staging scss:'
    }))
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(debug({
        title: 'processed:'
    }))
    // .pipe(modularscale.includePaths)
    .pipe(postcss([
        autoprefixer(prefixerOptions)
    ]))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest(serveDir.styles))
    // .pipe(reload({stream: true}));
    .pipe(browserSync.stream());
});