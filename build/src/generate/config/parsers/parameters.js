"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findParameterEnd(content, index) {
    let angleBracketCount = 0;
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
    let index = 0;
    const result = [];
    while (index < content.length) {
        const end = findParameterEnd(content, index);
        const parameter = content.substr(index, end - index).trim();
        if (parameter.length) {
            result.push(parameter);
        }
        index = end + 1;
    }
    return result;
}
function parameters(config, content) {
    return Object.assign({}, config, { parameters: [...config.parameters, ...parseParameters(content)] });
}
exports.parameters = parameters;
//# sourceMappingURL=parameters.js.map