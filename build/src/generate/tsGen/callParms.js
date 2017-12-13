"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function callParms(parameters) {
    let parms = parameters.map(getParameterName).join(', ');
    return appendCallParms(parms);
}
exports.callParms = callParms;
function appendCallParms(parms) {
    return parms.length ? 'gen, ' + parms : 'gen';
}
exports.appendCallParms = appendCallParms;
function getParameterName(parameter) {
    const index = parameter.indexOf(':');
    if (index === -1) {
        return parameter;
    }
    return parameter.substr(0, index).trim();
}
//# sourceMappingURL=callParms.js.map