const gulp = require('gulp'),
	webpack = require('webpack'),
	webpackStream = require('webpack-stream'),
	webpackConfig = require('../../webpack.config.js'),
	eslint = require('gulp-eslint'),
	log = require('fancy-log'),
	rawDir = {
		html: './app/**/*.pug',
		nothtmlPartial: '!./app/pug-templates/*.pug', //not this
		styleFile: './app/assets/scss/styles.scss',
		styles: './app/assets/scss/**/*.scss',
		scripts: './app/assets/js/**/*.js'
	},
	serveDir = {
		html: './dist',
		styles: './dist/public/css/',
		scripts: './dist/public/js/'
	};

gulp.task('lint', function() {
	return gulp
		.src(rawDir.scripts)
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

gulp.task(
	'scripts',
	gulp.series('lint', () => {
		return gulp
			.src(rawDir.scripts)
			.pipe(
				webpackStream(webpackConfig, webpack, (err, stats) => {
					if (err) {
						log(err.toString());
					}
					log(stats.toString());
				})
			)
			.pipe(gulp.dest(serveDir.scripts));
	})
);
