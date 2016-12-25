const gulp = require('gulp');
const ts = require('gulp-tsc');
const settings = require('./extra/buildSettings');
const tslint = require('gulp-tslint');
const wrap = require('./extra/wrap');
const src = settings.srcDir + '/**/*.ts';
const tests = settings.testSrcDir + '/**/*.ts';
const tsconfig = require('../tsconfig');


function build(reportError, emitError) {
    return gulp.src([tests, src])
        .pipe(ts({ declaration: true, emitError }))

        .pipe(gulp.dest(settings.buildDir));
}

gulp.task('build', ['cleanup'], function () {
    return gulp.src([tests, src])
        .pipe(ts(tsconfig.compilerOptions))
        .pipe(gulp.dest(settings.buildDir));
});

gulp.task('build-watch', ['cleanup'], wrap('TS-Build', function (reportError) {
    return gulp.src([tests, src])
        .pipe(ts(tsconfig.compilerOptions))
        .on('error', reportError)
        .pipe(gulp.dest(settings.buildDir));
}));

function lint(reportError, emitError) {
    return gulp.src(src)
        .pipe(tslint({ formatter: "verbose" }))
        .pipe(tslint.report({ emitError: process.env.emitError }))
        .on('error', reportError);
}

gulp.task('tslint', ['build'], function (done) {
    return lint(() => { }, true);
});

gulp.task('tslint-watch', ['build-watch'], wrap('TS-lint', reportError => lint(reportError, false)));