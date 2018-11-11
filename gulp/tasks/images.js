var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),

    devPaths = {
        img: './app/assets/img/*',
        html: './app/**/*.pug',
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

gulp.task('images', function () {
    gulp.src(devPaths.img)
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()]
        }))
        .pipe(gulp.dest(webPaths.img));
});