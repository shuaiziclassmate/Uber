var gulp = require("gulp");
//var connect = require("gulp-connect");

//gulp.task("server",function(){
//	connect.server({
//		root:"D:\\phpStudy\\WWW\\Uber",
//		livereload:true
//	});
//});

gulp.task("copy-html",function(){
	gulp.src("../*.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\Uber"));
	gulp.src("../js/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\Uber\\js"));
	gulp.src("../php/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\Uber\\js"));
});

gulp.task("copy-img",function(){
	gulp.src("../img/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\Uber\\img"));
});

gulp.task("watchall",function(){
	gulp.watch("..*/**/*",["copy-index"]);
	gulp.watch("../js/**/*",["copy-index"]);
	gulp.watch("../img/**/*",["copy-img"]);
	gulp.watch("../index.html",["copy-index"]);
})
