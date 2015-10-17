var gulp = require('gulp');
var debug = require('gulp-debug');

var php2html = require('gulp-php2html');
var mimifyHtml = require('gulp-minify-html');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var paths = {
    php: './src/**/*.php',
    styles: ['./src/scss/*.scss', './src/scss/*.css'],
    scripts: ['./src/js/*.coffee', './src/js/*.js'],
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

gulp.task('watch', function() {
    gulp.watch(paths.php, ['php']);
    gulp.watch(paths.styles, ['css']);
    gulp.watch(paths.scripts, ['js']);
})

gulp.task('default', ['watch', 'php', 'css', 'js']);