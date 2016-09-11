var gulp = require('gulp');
var debug = require('gulp-debug');
var runSequence = require('run-sequence');
var del = require('del');

var replace = require('gulp-replace')

var php2html = require('gulp-php2html');
var mimifyHtml = require('gulp-minify-html');

var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var imagemin = require('gulp-imagemin');
var jpegtran = require('imagemin-jpegtran');
var gm = require('gulp-gm');
var imageResize = require('gulp-image-resize');

var paths = {
    php: './src/**/*.php',
    styles: ['./src/scss/*.scss', './src/scss/*.css'],
    scripts: ['./src/js/*.coffee', './src/js/*.js'],
    images: ['./src/img/*'],
    toMove: ['./src/.htaccess', './src/manifest.appcache']
};

gulp.task('clean', function(cb) {
    return del('./public', cb);
});

gulp.task('php', function() {
    return gulp.src(paths.php)
        .pipe(debug({title: 'php: '}))    
        .pipe(php2html())
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
        .pipe(debug({title: 'img: '}))    
        .pipe(gm(function(file) {
            return file
                .gravity('Center')
                .resize(720)
                .blur(100);
        }))
        .pipe(imagemin({
            progressive: true,
            use: [jpegtran()]
        }))
        .pipe(gulp.dest('./public/img/'));
});

gulp.task('move', function() {
    return gulp.src(paths.toMove)
        .pipe(debug({title: 'move: '}))
        .pipe(replace('{DATE}', new Date().toISOString().slice(0, 10)))
        .pipe(gulp.dest('./public/'))
});

gulp.task('watch', function() {
    gulp.watch(paths.php, ['php']);
    gulp.watch(paths.styles, ['php', 'css']);
    gulp.watch(paths.scripts, ['php', 'js']);
    gulp.watch(paths.images, ['img'])
    gulp.watch(paths.toMove, ['move']);
});

gulp.task('default', function(cb) {
    runSequence('clean', 'php', 'css', 'js', 'img', 'move');
});

// gulp.task('default', ['watch', 'php', 'css', 'js', 'img', 'move']);
