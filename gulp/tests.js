const gulp = require('gulp');
const ts = require('gulp-tsc');
const settings = require('./extra/buildSettings');
const cover = require('gulp-coverage');
const mocha = require('gulp-mocha');
const notifier = require('node-notifier');
const wrap = require('./extra/wrap');

const testSrc = settings.testRunDir + '/**/*.js';
const mochaSetting = { reporter: 'spec' };

function test(reportError) {
    if (settings.coverage) {
        return gulp.src(testSrc)
            .pipe(cover.instrument({ pattern: [settings.buildDir + '/src/**/*.js'] }))
            .pipe(mocha(mochaSetting))
            .on('error', reportError)
            .pipe(cover.gather())
            .pipe(cover.format(['html', 'lcov']))
            .pipe(gulp.dest(settings.reportDir));
    }

    return gulp.src(testSrc)
        .pipe(mocha(mochaSetting))
        .on('error', reportError);
}

gulp.task('tests', ['build'], function (done) {
    return test(() => { });
});

gulp.task('tests-watch', ['build-watch'], wrap('Tests', test));
