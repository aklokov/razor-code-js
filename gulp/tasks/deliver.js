const gulp = require('gulp');
const sequence = require('run-sequence');

gulp.task('deliver', function (done) {
    return sequence('clean-output', 'build-ts', 'copy-to-deredux', done);
});
