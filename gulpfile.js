var gulp = require('gulp')

// Utils
var debug = require('gulp-debug')
var runSequence = require('run-sequence')
var del = require('del')
var replace = require('gulp-replace')
var concat = require('gulp-concat')

// PHP & HTML
var php2html = require('gulp-php2html')

// CSS & Sass
var sass = require('gulp-sass')

// Images
var imagemin = require('gulp-imagemin')
var jpegtran = require('imagemin-jpegtran')
var gm = require('gulp-gm')

var srcPaths = {
  php: './src/**/*.php',
  styles: ['./src/scss/**/*.scss'],
  scripts: ['./src/js/**/*.js'],
  images: ['./src/img/*'],
  cache: ['./src/manifest.appcache']
}

var distPaths = {
  php: './dist',
  styles: './dist/css',
  scripts: './dist/js',
  images: './dist/img',
  cache: './dist'
}

gulp.task('clean', function (cb) {
  return del('./dist', cb)
})

gulp.task('php', function () {
  return gulp.src(srcPaths.php)
    .pipe(debug({title: 'php: '}))
    .pipe(php2html())
    .pipe(gulp.dest(distPaths.php))
})

gulp.task('css', function () {
  return gulp.src('./src/scss/app.scss')
    .pipe(debug({title: 'css: '}))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sass())
    .pipe(concat('app.css'))
    .pipe(gulp.dest(distPaths.styles))
})

gulp.task('js', function () {
  return gulp.src(srcPaths.scripts)
    .pipe(debug({title: 'js: '}))
    .pipe(concat('app.js'))
    .pipe(gulp.dest(distPaths.scripts))
})

gulp.task('img', function () {
  return gulp.src(srcPaths.images)
    .pipe(debug({title: 'img: '}))
    .pipe(gm(function (file) {
      return file
        .gravity('Center')
        .resize(720)
        .blur(100)
    }))
    .pipe(imagemin({
      progressive: true,
      use: [jpegtran()]
    }))
    .pipe(gulp.dest(distPaths.images))
})

gulp.task('cache', function () {
  return gulp.src(srcPaths.cache)
    .pipe(debug({title: 'move: '}))
    .pipe(replace('{DATE}', new Date().toISOString()))
    .pipe(gulp.dest(distPaths.cache))
})

gulp.task('watch', function () {
  gulp.watch(srcPaths.php, ['php', 'cache'])
  gulp.watch(srcPaths.styles, ['css', 'cache'])
  gulp.watch(srcPaths.scripts, ['js', 'cache'])
  gulp.watch(srcPaths.images, ['img', 'cache'])
  gulp.watch(srcPaths.cache, ['cache'])
})

gulp.task('default', function () {
  runSequence('clean', 'php', 'css', 'js', 'img', 'cache')
})
