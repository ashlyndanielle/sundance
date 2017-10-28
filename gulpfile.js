const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

gulp.task('concat', function(){
  gulp.src(['./js/color.js', './js/*.js'])
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function() {
  gulp.src([
    './styles/reset.css', 
    './styles/*{.scss,.css}'
    ])
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
    gulp.watch('./js/*.js', ['concat']);
    gulp.watch(['./styles/*.css', 'styles/*.scss'], ['sass']);
})

gulp.task('default', ['concat', 'sass', 'watch']);