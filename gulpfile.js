const gulp = require('gulp');
const sass = require('gulp-sass');
const browser = require('gulp-browser');
const imagemin = require('gulp-imagemin');
const strip = require('gulp-strip-comments');

gulp.task('default', ['html', 'css', 'js', 'images']);

gulp.task('html', () => {
  return gulp.src('index.html')
  .pipe(strip())
  .pipe(gulp.dest('public/'))
});

gulp.task('css', () => {
  return gulp.src('scss/*.scss')
  .pipe(sass())
  .pipe(strip.text())
  .pipe(gulp.dest('public/'))
});


gulp.task('js', () => {
  return gulp.src('js/*')
  .pipe(browser.browserify())
  .pipe(strip())
  .pipe(gulp.dest('public/'))
});

gulp.task('images', () => {
  return gulp.src('assets/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('public/images/'))
});

gulp.task('watch', ['default'], () => {
  gulp.watch('*.html', ['html']);
  gulp.watch('scss/*.scss', ['css']);
  gulp.watch('*.js', ['js']);
  gulp.watch('js/*', ['js'])
  gulp.watch('images/*', ['images']);
});
