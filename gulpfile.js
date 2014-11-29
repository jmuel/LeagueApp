var gulp        = require('gulp'),
    browserify  = require('browserify'),
    reactify    = require('reactify'),
    source      = require('vinyl-source-stream'),
    uglify      = require('gulp-uglify'),
    buffer      = require('vinyl-buffer'),
    less        = require('gulp-less'),
    path        = require('path');

gulp.task('default', ['browserify-min', 'browserify', 'less', 'watch']);

gulp.task('browserify-min', function() {
    return browserify('./js/main.js', {transform: reactify})
        .bundle()
        .pipe(source('LeagueApp.min.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
});

gulp.task('browserify', function() {
    return browserify('./js/main.js',{transform: reactify, debug: true})
        .bundle()
        .pipe(source('LeagueApp.js'))
        .pipe(gulp.dest('./dist'))
});

gulp.task('less', function() {
    gulp.src('./less/main.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less, includes')]
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
    gulp.watch(['js/**/*.js', 'js/**/*.json'], ['browserify']);
    gulp.watch(['less/**/*.less'], ['less']);
});

