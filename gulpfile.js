
var gulp = require('gulp');
var rename = require('gulp-rename');

// Include Our Plugins
var uglify = require('gulp-uglify');

// Concatenate & Minify JS
gulp.task('uglify', function() {
    return gulp.src('dist/plotly.js')
        .pipe(rename('plotly.min.js'))
	.pipe(uglify({output: {ascii_only:true}}))
        .pipe(gulp.dest('dist'));
});

