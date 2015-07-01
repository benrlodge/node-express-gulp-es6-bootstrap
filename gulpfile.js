var gulp = require('gulp');
var babel = require('gulp-babel');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var Promise = require('bluebird');
var clear = require('clear');
var runSequence = Promise.promisify(require('run-sequence'));

var exitOnError = false;

var allTasks = [
  'clientscripts', 
  'serverscripts', 
  'vendorstyle', 
  'copy', 
  'spawn-watch'
];

gulp.task('vendorstyle', function() {
  return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.css')
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./public/css'))
});

gulp.task('serverscripts', function () {
  return gulp.src('src/js/server/**/*.js')
    .pipe(babel())
    .on('error', handleError)
    .pipe(gulp.dest('app/scripts/'));
});

gulp.task('clientscripts', function () {
  return gulp.src('src/js/client/**/*.js')
    .pipe(babel())
    .on('error', handleError)
    .pipe(gulp.dest('./public/js'));
});

gulp.task('copy', function() {
  gulp.src('./node_modules/font-awesome/fonts/**/*.{ttf,woff,eof,svg}')
    .pipe(gulp.dest('./public/css/fonts'));

  gulp.src([
    './node_modules/requirejs/require.js',
    './node_modules/underscore/underscore.js',
    './node_modules/jquery/dist/jquery.js',
    './node_modules/backbone/backbone.js'
  ]).pipe(gulp.dest('./public/js/vendor'));

});

// Handle exceptions and keep
// watching tasks if we hit one
function handleError(err) {
  var displayErr = gutil.colors.red(err);
  gutil.log(displayErr);
  if (exitOnError) process.exit(1);
}

gulp.task('kill-gulp', function() {
  process.exit(0);
});

gulp.task('clear-terminal', function() {
  clear();
  return Promise.delay(100);
})

gulp.task('watch-build', function() {
  return runSequence('clear-terminal', allTasks);
});

gulp.task('watch', function () {
  exitOnError = true;
  gulp.watch(['src/**/*.js'], ['watch-build']);
  gulp.watch('gulpfile.js', ['clear-terminal','kill-gulp']);
});

gulp.task('spawn-watch', ['clear-terminal'], function() {
 var spawnWatch = function() {
    var proc = require('child_process').spawn('gulp', ['watch'], {stdio: 'inherit'});
    proc.on('close', function (code) {
      spawnWatch()
    });
  }
  spawnWatch();
})


gulp.task('default', allTasks);