var gulp = require("gulp")
  , sass = require('gulp-ruby-sass')
  , autoprefix = require('gulp-autoprefixer')
  , notify = require("gulp-notify")
  , bower = require("gulp-bower")
;

config = {
  sassPath: './sass',
  bowerDir: './bower_components'
};

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest(config.bowerDir));
});

gulp.task('styles', function() {
  return gulp.src(config.sassPath + '/style.scss')
    .pipe(sass({
      style: 'expanded',
      loadPath: [
        './sass',
        config.bowerDir + '/bootstrap-sass-official/assets/stylesheets'
      ]
    })
    .on("error", notify.onError(function (error) {
      return "Error: " + error.message;
    })))
    .pipe(gulp.dest('./public/css'));
});
