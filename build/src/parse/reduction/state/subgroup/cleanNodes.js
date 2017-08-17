"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodes_1 = require("../../../../nodes");
const nodesFunctions_1 = require("./nodesFunctions");
const _ = require("lodash");
function splitNodes(nodes) {
    return {
        config: nodes.filter(node => node.type === nodes_1.NodeType.Config),
        content: nodes.filter(node => node.type !== nodes_1.NodeType.Config)
    };
}
function splitLines(nodes) {
    let lines = [];
    let line = [];
    nodes.forEach(node => {
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
    if (!line.some(node => nodesFunctions_1.isSuppressingNode(node))) {
        return line;
    }
    if (line.some(node => !nodesFunctions_1.isSuppressableNode(node) && !nodesFunctions_1.isSuppressingNode(node))) {
        return line;
    }
    return line.filter(node => nodesFunctions_1.isSuppressingNode(node));
}
function cleanContent(nodes) {
    const lines = splitLines(nodes).map(cleanLine);
    return _.flatten(lines);
}
function cleanNodes(nodes) {
    const split = splitNodes(nodes);
    return [...split.config, ...cleanContent(split.content)];
}
exports.cleanNodes = cleanNodes;
//# sourceMappingURL=cleanNodes.js.map