"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StateType_1 = require("./StateType");
const tokens_1 = require("../../../tokens");
const functions = require("./stateFunctions");
const nodes_1 = require("../../../nodes");
function createNode(current) {
    return new nodes_1.ContentNode(functions.content.getContent(current), nodes_1.NodeType.Comment);
}
function addNodeToPreviousState(current) {
    return current.content.length
        ? functions.group.addNode(current.previous, createNode(current))
        : functions.content.addToken(current.previous, tokens_1.keywords.at);
}
function commentEndEncountered(current) {
    return addNodeToPreviousState(current);
}
function eofEncountered(current) {
    return addNodeToPreviousState(current);
}
function isStarEncountered(current, token) {
    if (token === '*') {
        return Object.assign({}, current, { starEncountered: true });
    }
    else {
        return Object.assign({}, current, { content: current.content + token, starEncountered: false });
    }
}
function reduce(current, token) {
    if (token === tokens_1.keywords.eof) {
        return eofEncountered(current);
    }
    if (token === tokens_1.keywords.at && current.starEncountered) {
        return commentEndEncountered(current);
    }
    return isStarEncountered(current, token);
}
exports.reduce = reduce;
function createState(previous) {
    return {
        type: StateType_1.StateType.Comment,
        previous,
        content: '',
        starEncountered: false
    };
}
exports.createState = createState;
//# sourceMappingURL=commentState.js.map