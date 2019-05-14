const { watch, task, series, parallel } = require('gulp'),
	browserSync = require('browser-sync').create(),
	{ compilePug, compileSass } = require('./markup.js'),
	del = require('del'),
	// Path/Directory variables
	rawDir = {
		img: './app/assets/img/*',
		html: './app/*.pug',
		styleFile: './app/assets/scss/styles.scss',
		nothtmlPartial: '!./app/pug-templates/',
		styles: './app/assets/scss/**/*.scss',
		scripts: './app/assets/js/**/*.js'
	};

function cleanUp() {
	return del(['./dist/public']);
}

function reload(done) {
	browserSync.reload();
	done();
}

task('build', series(parallel('scriptTask', 'markupTask'), 'imgTask'));

task(
	'serve',
	series('build', function watchParty() {
		browserSync.init({
			open: false,
			injectChanges: true,
			server: './dist'
		});

		watch(rawDir.styles, compileSass);
		watch([rawDir.html, rawDir.nothtmlPartial]).on(
			'change',
			series(compilePug, reload)
		);
		watch(rawDir.img).on('change', series('imgTask', reload));
	})
);

task('default', series(cleanUp, 'serve'));
