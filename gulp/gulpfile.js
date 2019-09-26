const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('../scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(csso())
        .pipe(gulp.dest('../css/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('../scss/**/*.scss', ['sass']);
});

gulp.task('watch', function () {
    gulp.watch('../scss/**/*.scss',  gulp.series('sass'));
});