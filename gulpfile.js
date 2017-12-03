var gulp      = require('gulp'),
	uglify    = require('gulp-uglify'),
	minifyCSS = require('gulp-minify-css'),
	concat    = require('gulp-concat');
	less      = require('gulp-less');
 
gulp.task('scripts',function(){
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('dist/js'))
});

gulp.task('styles',function(){
	gulp.src('css/*.css')
		.pipe(minifyCSS())
		.pipe(concat('styles.css'))
		.pipe(gulp.dest('dist/css'))
});

gulp.task('less',function(){
 	gulp.src('less/*.less')
	    .pipe(less({
	      paths: ['less/', 'css/']
	    }))
	    .pipe(gulp.dest('css/'))
})

gulp.task('watch',function(){
	gulp.watch('js/*.js',['scripts']);
    gulp.watch('css/*.css',['styles']);
    gulp.watch('less/*.less',['less']);
});

gulp.task('default', ['scripts', 'styles', 'less', 'watch']);