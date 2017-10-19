"use strict";
exports.__esModule = true;
var nodes_1 = require("../../../../nodes");
var nodesFunctions_1 = require("./nodesFunctions");
var _ = require("lodash");
function splitNodes(nodes) {
    return {
        config: nodes.filter(function (node) { return node.type === nodes_1.NodeType.Config; }),
        content: nodes.filter(function (node) { return node.type !== nodes_1.NodeType.Config; })
    };
}
function splitLines(nodes) {
    var lines = [];
    var line = [];
    nodes.forEach(function (node) {
        line.push(node);
        if (nodesFunctions_1.isEndOfLine(node)) {
            lines.push(line);
            line = [];
        }
    });
    if (line.length) {
        lines.push(line);
    }
    return lines;
}
function cleanLine(line) {
    if (!line.some(function (node) { return nodesFunctions_1.isSuppressingNode(node); })) {
        return line;
    }
    if (line.some(function (node) { return !nodesFunctions_1.isSuppressableNode(node) && !nodesFunctions_1.isSuppressingNode(node); })) {
        return line;
    }
    return line.filter(function (node) { return nodesFunctions_1.isSuppressingNode(node); });
}
function cleanContent(nodes) {
    var lines = splitLines(nodes).map(cleanLine);
    return _.flatten(lines);
}
function cleanNodes(nodes) {
    var split = splitNodes(nodes);
    return split.config.concat(cleanContent(split.content));
}
exports.cleanNodes = cleanNodes;
//# sourceMappingURL=cleanNodes.js.map