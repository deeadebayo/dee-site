const { watch, task, src, series, parallel } = require('gulp'),
	// watch = require('gulp-watch'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload,
	// Path/Directory variables
	rawDir = {
		img: './app/assets/img/*',
		html: './app/*.pug',
		styleFile: './app/assets/scss/styles.scss',
		styles: './app/assets/scss/**/*.scss',
		scripts: './app/assets/js/**/*.js'
	},
	serveDir = {
		// img: './dist/public/img/',
		html: './dist',
		styleFile: '/dist/public/css/**/*.css',
		styles: './dist/public/css/'
		//scripts: './dist/public/js/'
	};

function scriptsRefresh(cb) {
	series('scriptTask', reload);
	cb();
}

function cssInject() {
	return src(serveDir.styleFile).pipe(browserSync.stream());
}

function reloadPage(cb) {
	series('compilePug', reload);
	cb();
}

task('watch', () => {
	browserSync.init({
		open: false,
		injectChanges: true,
		server: {
			baseDir: 'dist'
		}
	});

	watch(rawDir.html, reloadPage);

	/* watch(rawDir.html, function(cb) {
		series('compilePug', reloadPage);
		cb();
	}); */

	watch(rawDir.styles, series(cssInject, 'compileSass'));

	watch(rawDir.img, () => {
		series('imgTask', reload);
	});
	watch(rawDir.scripts, scriptsRefresh);
});

task('build', parallel('scriptTask', 'markupTask', 'imgTask'));

task('default', series('build', 'watch'));
