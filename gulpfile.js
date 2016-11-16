var gulp = require('gulp')

// Utils
var debug = require('gulp-debug')
var runSequence = require('run-sequence')
var del = require('del')
var replace = require('gulp-replace')
var concat = require('gulp-concat')

// PHP & HTML
var php2html = require('gulp-php2html')
var mimifyHtml = require('gulp-minify-html')

// CSS & Sass
var minifyCss = require('gulp-minify-css')
var sass = require('gulp-sass')

// JS
var uglify = require('gulp-uglify')

// Images
var imagemin = require('gulp-imagemin')
var jpegtran = require('imagemin-jpegtran')
var gm = require('gulp-gm')

var srcPaths = {
  php: './src/**/*.php',
  styles: ['./src/scss/*.scss', './src/scss/*.css'],
  scripts: ['./src/js/*.coffee', './src/js/*.js'],
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
    .pipe(mimifyHtml())
    .pipe(gulp.dest(distPaths.php))
})

gulp.task('css', function () {
  return gulp.src(srcPaths.styles)
    .pipe(debug({title: 'css: '}))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sass())
    .pipe(minifyCss())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest(distPaths.styles))
})

gulp.task('js', function () {
  return gulp.src(srcPaths.scripts)
    .pipe(debug({title: 'js: '}))
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest(distPaths.scripts))
})

gulp.task('img', function () {
  return gulp.src(srcPaths.images)
    .pipe(debug({title: 'img: '}))
    .pipe(gm(function (file) {
      return file
        .gravity('Center')
        .resize(720)
        .blur(40)
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
  gulp.watch(srcPaths.php, ['php'])
  gulp.watch(srcPaths.styles, ['php', 'css'])
  gulp.watch(srcPaths.scripts, ['php', 'js'])
  gulp.watch(srcPaths.images, ['img'])
  gulp.watch(srcPaths.cache, ['move'])
})

gulp.task('default', function () {
  runSequence('clean', 'php', 'css', 'js', 'img', 'cache')
})
