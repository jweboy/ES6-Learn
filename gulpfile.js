var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var PATH = './';

gulp.task('reload', function() {
  browserSync({
    server:{
      baseDir:PATH
    }
  });

  gulp.watch(['views/*.html','scripts/*.js'], {cwd:PATH}, reload);
});
