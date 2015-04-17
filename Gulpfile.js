var gulp = require('gulp');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var sourcemaps = require('gulp-sourcemaps');

gulp
  .task('default', ['scripts', 'watch'])
  .task('scripts', scripts)
  .task('watch', watch);

var paths = {
  scripts: './src/*.js',
  dest: './build'
};

function scripts() {
  var bundler = browserify({
    entries: './src/react-ice.js',
    transform: [reactify],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  });

  bundler.bundle()
   .on('error', function(err) {
    console.log('Error with Browserify', err);
   })
   .pipe(source('react-ice.js'))
   .pipe(gulp.dest('./build'));
};

function watch() {
  gulp.watch(paths.scripts, scripts);
}
