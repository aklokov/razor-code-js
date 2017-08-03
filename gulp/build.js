const gulp = require('gulp');
const ts = require('gulp-tsc');
const settings = require('./extra/buildSettings');
const tsconfig = require('../tsconfig');
const allTs = '/**/*.ts';

function build(src, dest) {
    const options = Object.assign({}, tsconfig.compilerOptions, { "baseUrl": "." });
    return gulp.src(src)
        .pipe(ts(options))
        .pipe(gulp.dest(dest));
}

gulp.task('build-src', ['cleanup'], function () {
    return build(settings.srcDir + allTs, settings.buildSrcDir);
})

gulp.task('build-tests', ['cleanup'], function () {
    return build(settings.testSrcDir + allTs, settings.testRunDir);
})

gulp.task('build', ['build-src', 'build-tests']);
