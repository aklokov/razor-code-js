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
var tokens_1 = require("../../../../tokens");
var bracketMain = require("./bracketMain");
var functions = require("../stateFunctions");
function goBack(current, token) {
    var contentState = functions.content.addToken(current.contentState, token);
    if (current.topBracket) {
        return contentState;
    }
    var result = __assign({}, current.previous, { contentState: contentState });
    return result;
}
exports.goBack = goBack;
function addToken(current, token) {
    return __assign({}, current, { contentState: functions.content.addToken(current.contentState, token) });
}
function reducerCreation(openingBrackets, closingBracket) {
    return function reduce(current, token) {
        if (token === tokens_1.keywords.eof) {
            return current.previous;
        }
        if (openingBrackets[token]) {
            return bracketMain.createBracketState(current.contentState, current, token);
        }
        if (closingBracket === token) {
            return goBack(current, token);
        }
        return addToken(current, token);
    };
}
exports.reducerCreation = reducerCreation;
var escape = '\\';
function quotesReducerCreation(closingBracket) {
    return function reduce(current, token) {
        if (token === tokens_1.keywords.eof) {
            return current.previous;
        }
        if (token === closingBracket && !current.escaped) {
            return goBack(current, token);
        }
        if (current.escaped) {
            current = __assign({}, current, { escaped: false });
        }
        else if (token === escape) {
            current = __assign({}, current, { escaped: true });
        }
        return addToken(current, token);
    };
}
exports.quotesReducerCreation = quotesReducerCreation;
function stateCreation(openingBracket, type) {
    return function createState(contentState, previous, topBracket) {
        var content = functions.content.addToken(contentState, openingBracket);
        return {
            topBracket: topBracket,
            type: type,
            contentState: content,
            previous: previous
        };
    };
}
exports.stateCreation = stateCreation;
//# sourceMappingURL=baseBracketFunctions.js.map