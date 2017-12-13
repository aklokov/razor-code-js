"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./interfaces");
const tokens_1 = require("../../../tokens");
const functions = require("./stateFunctions");
const stateItems = require("./");
function add(current) {
    return functions.content.forceAddContent(current);
}
function reduceGroupState(current, token) {
    switch (token) {
        case tokens_1.keywords.eol:
            return functions.eol.addForceEol(current);
        case tokens_1.keywords.lineFeed:
            return functions.eol.tryAddEol(current);
        case tokens_1.keywords.atat:
            return functions.content.addToken(current, tokens_1.keywords.at);
        case tokens_1.keywords.at:
            return stateItems.implicitExpressionState.createState(add(current));
        case tokens_1.keywords.atparenthesis:
            return stateItems.explicitExpressionState.createState(add(current));
        case tokens_1.keywords.atbrace:
            return stateItems.injectionState.createState(add(current));
        case tokens_1.keywords.foreach:
        case tokens_1.keywords.foreachSpaced:
            return stateItems.subgroupConditionState.createState(add(current), interfaces_1.SubgroupOwner.foreach);
        case tokens_1.keywords.if:
        case tokens_1.keywords.ifSpaced:
            return stateItems.subgroupConditionState.createState(add(current), interfaces_1.SubgroupOwner.if);
        case tokens_1.keywords.escapeBrace:
            return functions.content.addToken(current, '}');
        case tokens_1.keywords.atStar:
            return stateItems.commentState.createState(add(current));
        case tokens_1.keywords.atbracket:
            return stateItems.partialState.createState(add(current));
        default:
            return functions.content.addToken(current, token);
    }
}
exports.reduceGroupState = reduceGroupState;
//# sourceMappingURL=groupState.js.map