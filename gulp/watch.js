const gulp = require('gulp');
const settings = require('./extra/buildSettings');

const src = settings.srcDir + '/**/*.ts';
const tests = settings.testSrcDir + '/**/*.ts';

gulp.task('watch-sequence', ['build-watch', 'tslint-watch', 'tests-watch'])

gulp.task('watch', function () {
    const watchTask = 'watch-sequence';
    gulp.start(watchTask)
    gulp.watch([src, tests], [watchTask]);
})
