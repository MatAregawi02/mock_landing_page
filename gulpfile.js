const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass1() {
    return gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('main-css'));
}

// function compileSass2() {
//     return gulp.src('scss-post/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('post-css'));
// }


function watchFiles() {
    gulp.watch('scss/**/*.scss', compileSass1);
    // gulp.watch('scss-post/*.scss', compileSass2);
}

exports.default = gulp.series(compileSass1, watchFiles);
//dart-sass must be used next time