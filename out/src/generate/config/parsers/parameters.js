"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
function findParameterEnd(content, index) {
    var angleBracketCount = 0;
    while (index < content.length) {
        if (content[index] === '<') {
            angleBracketCount++;
        }
        if (content[index] === '>' && angleBracketCount > 0) {
            angleBracketCount--;
        }
        if (content[index] === ',' && angleBracketCount === 0) {
            break;
        }
        index++;
    }
    return index;
}
function parseParameters(content) {
    var index = 0;
    var result = [];
    while (index < content.length) {
        var end = findParameterEnd(content, index);
        var parameter = content.substr(index, end - index).trim();
        if (parameter.length) {
            result.push(parameter);
        }
        index = end + 1;
    }
    return result;
}
function parameters(config, content) {
    return __assign({}, config, { parameters: config.parameters.concat(parseParameters(content)) });
}
exports.parameters = parameters;
//# sourceMappingURL=parameters.js.map