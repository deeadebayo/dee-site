const { src, task, dest, parallel } = require('gulp'),
	debug = require('gulp-debug'),
	pug = require('gulp-pug'),
	sourcemaps = require('gulp-sourcemaps'),
	sass = require('gulp-sass'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	browserSync = require('browser-sync').create(),
	{ rawDir, serveDir } = require('../variables__directory.js'),
	// Options for Gulp Plugins
	sassOptions = {
		outputStyle: 'compressed'
	},
	prefixerOptions = {
		browsers: ['last 3 versions']
	};

function compilePug() {
	return src([rawDir.html, rawDir.nothtmlPartial])
		.pipe(
			debug({
				title: 'staging pug:'
			})
		)
		.pipe(
			pug({
				locals: {},
				pretty: false
			})
		)
		.pipe(
			debug({
				title: 'processed:'
			})
		)
		.pipe(dest(serveDir.html));
}

function compileSass() {
	return (
		src(rawDir.styleFile)
			// .pipe(
			// 	debug({
			// 		title: 'staging scss:'
			// 	})
			// )
			.pipe(sourcemaps.init())
			.pipe(sass(sassOptions).on('error', sass.logError))
			.pipe(
				debug({
					title: 'processed:'
				})
			)
			.pipe(postcss([autoprefixer(prefixerOptions)]))
			.pipe(sourcemaps.write(''))
			.pipe(dest(serveDir.styles))
			.pipe(browserSync.stream({ stream: true }))
	);
}

task('markupTask', parallel(compilePug, compileSass));

exports.compilePug = compilePug;
exports.compileSass = compileSass;
