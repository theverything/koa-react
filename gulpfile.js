/**
 * Modules
 */
var path = require('path');
var gulp = require('gulp');
var scss = require('gulp-ruby-sass');
var imagemin = require('gulp-imagemin');
var runSequence = require('run-sequence');
var webpack = require('webpack');
var gulpWebpack = require('gulp-webpack');
var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon');
var rimraf = require('rimraf');
var chalk = require('chalk');
var webpackConfig = require('./webpack.config.js');

/**
 * Assets Paths
 */
var paths = {
  js: ['public/js/**/*.js', 'public/js/vendor/*'],
  jsVendor: ['public/js/vendor/*.js'],
  scss: ['public/scss/**/*.scss'],
  img: 'public/img/**/*',
  dist: function (p) {
    return path.join('./dist', p);
  }
};

/**
 * Delete dist dir
 */
gulp.task('clean', function (cb) {
  rimraf('./dist', cb);
});

/**
 * Build all javascript assets
 */
gulp.task('js', function () {
  runSequence(['js:main', 'js:vendor']);
});

/**
 * Build main javascript assets
 */
gulp.task('js:main', function () {
  return gulp.src(paths.js)
    .pipe(gulpWebpack(webpackConfig, webpack))
    .pipe(gulp.dest(paths.dist('js')));
});

/**
 * Build vendor javascript assets
 */
gulp.task('js:vendor', function () {
  return gulp.src(paths.jsVendor)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(paths.dist('js')));
});

/**
 * Build scss assets
 */
gulp.task('scss', function () {
  return gulp.src(paths.scss)
    .pipe(scss())
    .on('error', function (err) {
      console.log(chalk.red(err.message));
    })
    .pipe(gulp.dest(paths.dist('css')));
});

/**
 * Compress image assets
 */
gulp.task('img', function () {
  return gulp.src(paths.img)
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest(paths.dist('img')));
});

/**
 * Watch and rebuild assets
 */
gulp.task('watch', function () {
  gulp.watch(paths.js, ['js']);
  gulp.watch(paths.scss, ['scss']);
  gulp.watch(paths.img, ['img']);
});

/**
 * Development server
 */
gulp.task('server', function () {
  nodemon({
    script: 'server.js',
    ext: 'html js',
    ignore: [
      'node_modules/**/*',
      'webpack.config.js',
      'gulpfile.js'
    ],
    nodeArgs: ['--harmony'],
    env: { 'NODE_ENV': 'development' }
  })
    .on('restart', function () {
      console.log(chalk.green('Server Restarted'));
    });
});

/**
 * Default task
 */
gulp.task('default', function () {
  runSequence('clean', ['js', 'scss', 'img'], ['watch', 'server']);
});
