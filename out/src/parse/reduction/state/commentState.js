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
var StateType_1 = require("./StateType");
var tokens_1 = require("../../../tokens");
var functions = require("./stateFunctions");
var nodes_1 = require("../../../nodes");
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
        return __assign({}, current, { starEncountered: true });
    }
    else {
        return __assign({}, current, { content: current.content + token, starEncountered: false });
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
        previous: previous,
        content: '',
        starEncountered: false
    };
}
exports.createState = createState;
//# sourceMappingURL=commentState.js.map