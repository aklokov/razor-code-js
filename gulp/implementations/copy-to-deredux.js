const gulp = require('gulp');
const settings = require('../settings');
const constants = require('../settings/constants');
gulp.task('copy-to-deredux', function () {
    return gulp.src(settings.srcBuildPath + constants.allFiles)
        .pipe(gulp.dest('../de-redux/node_modules/razor-code-js/build/src'));
});
