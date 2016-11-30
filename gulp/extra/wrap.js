const notifier = require('node-notifier');

module.exports = function wrap(name, exec) {
    return function (done) {
        function reportError(error) {
            notifier.notify({
                title: 'Gulp: ' + name,
                message: error.message
            });
             done(error);
        }

        return exec(reportError);
    }
}