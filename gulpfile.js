var gulp        = require('gulp'),
    bower_files = require('main-bower-files');

gulp.task('bower-files', function() {
    return gulp.src(bower_files()).pipe(gulp.dest('js/libs/'));
});