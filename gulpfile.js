var gulp = require('gulp');
var debug = require('gulp-debug');

var php2html = require('gulp-php2html');
var mimifyHtml = require('gulp-minify-html');

var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var imagemin = require('gulp-imagemin');
var jpegtran = require('imagemin-jpegtran');
var imageResize = require('gulp-image-resize');

var paths = {
    php: './src/**/*.php',
    styles: ['./src/scss/*.scss', './src/scss/*.css'],
    scripts: ['./src/js/*.coffee', './src/js/*.js'],
    images: ['./src/img/*']
};

gulp.task('php', function() {
    return gulp.src(paths.php)
        .pipe(php2html({
            verbose: true
        }))
        .pipe(mimifyHtml())
        .pipe(gulp.dest('./public/'));
});

gulp.task('css', function() {
    return gulp.src(paths.styles)
        .pipe(debug({title: 'css: '}))
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('js', function() {
    return gulp.src(paths.scripts)
        .pipe(debug({title: 'js: '}))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('./public/js/'));
});

gulp.task('img', function() {
    return gulp.src(paths.images)
        .pipe(imageResize({
            width: 720,
            upscale: false,
            gravity: 'center',
            format: 'jpg',
        }))
        .pipe(imagemin({
            progressive: true,
            use: [jpegtran()]
        }))
        .pipe(gulp.dest('./public/img/'));
});

gulp.task('watch', function() {
    gulp.watch(paths.php, ['php']);
    gulp.watch(paths.styles, ['css']);
    gulp.watch(paths.scripts, ['js']);
    gulp.watch(paths.images, ['img'])
})

gulp.task('default', ['watch', 'php', 'css', 'js', 'img']);