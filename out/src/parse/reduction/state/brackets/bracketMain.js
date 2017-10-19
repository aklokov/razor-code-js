"use strict";
exports.__esModule = true;
var states = require("../index");
function createState(contentState, previous, token, topBracket) {
    switch (token) {
        case '(':
            return states.parenthesisState.createState(contentState, previous, topBracket);
        case '[':
            return states.squareBracketState.createState(contentState, previous, topBracket);
        case '{':
            return states.curlyBraceState.createState(contentState, previous, topBracket);
        case '<':
            return states.angleBracketState.createState(contentState, previous, topBracket);
        case '"':
            return states.quoteBracketState.createState(contentState, previous, topBracket);
        case '\'':
            return states.apostropheBracketState.createState(contentState, previous, topBracket);
        default:
            throw new Error('unknown brace');
    }
}
function createTopBracketState(contentState, previous, token) {
    return createState(contentState, previous, token, true);
}
exports.createTopBracketState = createTopBracketState;
function createBracketState(contentState, previous, token) {
    return createState(contentState, previous, token, false);
}
exports.createBracketState = createBracketState;
//# sourceMappingURL=bracketMain.js.map