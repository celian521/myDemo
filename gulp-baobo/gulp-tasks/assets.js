/**
* HTML tasks
* ----------------
* Minifies HTML (production only)
* Copies HTML files into dist directory
*/

module.exports = function (base, paths, config, gulp, plugins, del) {
	return function () {
		gulp.src(paths.assets.src)
		.pipe(gulp.dest(paths.assets.dist));
	};
};