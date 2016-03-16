var gulp = require('gulp');
var fileInclude = require("gulp-file-include");
var exec = require('child_process').exec;
var minifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');

var paths = {
    html: [
        "./*.html",
    ],
    images: [
        "./images/*"
    ],
    js: [
        "./js/**/*",
    ],
    sass: [
        "/sass/*.scss",
    ],
    font: [
        "./fonts/*.ttf"
    ]
};

var output = "../dist";
var dist = "../test/public";

/**
 *  Task 
 */
gulp.task('images', function() {
    gulp.src(paths.images)
        .pipe(gulp.dest(output + "/images"));
});

gulp.task('html', function() {
    gulp.src(paths.html)
        .pipe(fileInclude())
        .pipe(gulp.dest(output));
});

gulp.task('js', function() {
    gulp.src(paths.js)
        .pipe(gulp.dest(output + "/js"));
});

gulp.task('font', function() {
    gulp.src(paths.font)
        .pipe(gulp.dest(output + "/css/fonts"));
});

gulp.task('css', function() {
    exec("sass --watch ./sass:"+output+"/css", function(err, stdout, stderr) {
        if (err) console.log("gulp.sass error:" + err);
    });
});

// =============压缩合并dist资源到test============== //
gulp.task('release', function() {
    gulp.src(output+"/*.html")
        .pipe(useref())
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulpif('*.js', uglify({
            mangle: false
        })))
        .pipe(gulp.dest(dist));

    gulp.src(paths.font)
        .pipe(gulp.dest(dist+"/css/fonts"));

    gulp.src(paths.images)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(dist+"/images"));
});

// =============拷贝dist资源到test============== //
gulp.task('test', function() {
    gulp.src("../dist/**/*")
    .pipe(gulp.dest("../test/public"));
});

// 默认构建
gulp.task('default', ['images', 'css', 'html', 'js', 'font', 'test'], function() {
    gulp.watch(['sass/**/*.scss'], ['css']);
    gulp.watch(paths.html, ['html']);
    gulp.watch(['js/**/*.js'], ['js']);
});