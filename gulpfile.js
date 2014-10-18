/**
 * Modules
 */
var gulp = require('gulp');
var scss = require('gulp-ruby-sass');
var imagemin = require('gulp-imagemin');
var runSequence = require('run-sequence');
var webpack = require('gulp-webpack');
var nodemon = require('gulp-nodemon');
var rimraf = require('rimraf');
var chalk = require('chalk');
var webpackConfig = require('./webpack.config.js');

/**
 * Assets Paths
 */
var paths = {
  js: ['public/js/**/*.js'],
  scss: ['public/scss/**/*.scss'],
  img: 'public/img/**/*'
};

/**
 * Delete dist dir
 */
gulp.task('clean', function (cb) {
  rimraf('./dist', cb);
});

/**
 * Build javascript assets
 */
gulp.task('js', function () {
  return gulp.src(paths.js)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist/js'));
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
    .pipe(gulp.dest('dist/css'));
});

/**
 * Compress image assets
 */
gulp.task('img', function () {
  return gulp.src(paths.img)
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('dist/img'));
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
      'node_modules',
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
