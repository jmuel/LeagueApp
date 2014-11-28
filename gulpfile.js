var gulp        = require('gulp'),
    browserify  = require('browserify'),
    reactify    = require('reactify'),
    source      = require('vinyl-source-stream'),
    uglify      = require('gulp-uglify'),
    buffer      = require('vinyl-buffer');

gulp.task('default', ['browserify-min', 'browserify', 'watch']);

gulp.task('browserify-min', function() {
    var b = browserify();
    b.transform(reactify);
    b.add('./js/main.js');
    return b.bundle()
        .pipe(source('LeagueApp.min.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
});

gulp.task('browserify', function() {
    var b = browserify();
    b.transform(reactify);
    b.add('./js/main.js');
    return b.bundle()
        .pipe(source('LeagueApp.js'))
        .pipe(gulp.dest('./dist'))
});

gulp.task('watch', function() {
    gulp.watch(['js/**/*.js', 'js/**/*.json'], ['browserify']);
});

