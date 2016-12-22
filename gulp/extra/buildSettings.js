const coverage = !process.env.SKIP_COVERAGE || process.env.SKIP_COVERAGE.toLowerCase() !== 'true';

module.exports = {
    licenseFile: './license.txt',
    buildDir: './out',
    testRunDir: './out/testSrc',
    reportDir: './out/reports',
    coverage: false
}