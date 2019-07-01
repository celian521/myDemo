/**
* HTML tasks
* ----------------
* Minifies HTML (production only)
* Copies HTML files into dist directory
*/

module.exports = function (base, paths, config, gulp, plugins, del) {
	return function () {
		gulp.src(paths.html.src)
		.pipe(plugins.htmlExtend({annotations:true,verbose:false}))
		.pipe(plugins.if(config.isProduction, plugins.htmlmin(config.htmlMin)))
		.pipe(gulp.dest(paths.html.dist));
	};
};