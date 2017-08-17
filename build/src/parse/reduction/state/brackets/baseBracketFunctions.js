"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tokens_1 = require("../../../../tokens");
const bracketMain = require("./bracketMain");
const functions = require("../stateFunctions");
const hash_map_1 = require("hash-map");
function goBack(current, token) {
    const contentState = functions.content.addToken(current.contentState, token);
    if (current.topBracket) {
        return contentState;
    }
    const result = Object.assign({}, current.previous, { contentState });
    return result;
}
exports.goBack = goBack;
function addToken(current, token) {
    return Object.assign({}, current, { contentState: functions.content.addToken(current.contentState, token) });
}
function reducerCreation(openingBrackets, closingBracket) {
    const bracketsMap = hash_map_1.objectToStringMap(openingBrackets);
    return function reduce(current, token) {
        if (token === tokens_1.keywords.eof) {
            return current.previous;
        }
        if (bracketsMap[token]) {
            return bracketMain.createBracketState(current.contentState, current, token);
        }
        if (closingBracket === token) {
            return goBack(current, token);
        }
        return addToken(current, token);
    };
}
exports.reducerCreation = reducerCreation;
const escape = '\\';
function quotesReducerCreation(closingBracket) {
    return function reduce(current, token) {
        if (token === tokens_1.keywords.eof) {
            return current.previous;
        }
        if (token === closingBracket && !current.escaped) {
            return goBack(current, token);
        }
        if (current.escaped) {
            current = Object.assign({}, current, { escaped: false });
        }
        else if (token === escape) {
            current = Object.assign({}, current, { escaped: true });
        }
        return addToken(current, token);
    };
}
exports.quotesReducerCreation = quotesReducerCreation;
function stateCreation(openingBracket, type) {
    return function createState(contentState, previous, topBracket) {
        const content = functions.content.addToken(contentState, openingBracket);
        return {
            topBracket,
            type: type,
            contentState: content,
            previous
        };
    };
}
exports.stateCreation = stateCreation;
//# sourceMappingURL=baseBracketFunctions.js.map