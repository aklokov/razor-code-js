"use strict";
exports.__esModule = true;
function callParms(parameters) {
    var parms = parameters.map(getParameterName).join(', ');
    return appendCallParms(parms);
}
exports.callParms = callParms;
function appendCallParms(parms) {
    return parms.length ? 'gen, ' + parms : 'gen';
}
exports.appendCallParms = appendCallParms;
function getParameterName(parameter) {
    var index = parameter.indexOf(':');
    if (index === -1) {
        return parameter;
    }
    return parameter.substr(0, index).trim();
}
//# sourceMappingURL=callParms.js.map