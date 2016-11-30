const gulp = require('gulp');

gulp.task('full-run', ['build', 'tslint', 'tests']);
