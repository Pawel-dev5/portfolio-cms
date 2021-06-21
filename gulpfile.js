// const gulp = require("gulp");
// const sass = require("gulp-sass");
// const sourcemaps = require("gulp-sourcemaps");

// gulp.task("sass", function() {
//     return gulp.src("src/scss/main.scss")
//         .pipe(sourcemaps.init())
//         .pipe(sass().on("error", sass.logError))
//         .pipe(sourcemaps.write())
//         .pipe(gulp.dest('css'))
// });
// gulp.task("watch", function(){
//     gulp.watch("scss/**/*.scss", gulp.series("sass"));
// });


'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
  .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(sourcemaps.write());
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});