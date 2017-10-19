"use strict";
exports.__esModule = true;
var nodes_1 = require("../../../../nodes");
var contentFunctions = require("./content");
var group = require("./group");
function addEol(current) {
    return group.addNode(current, new nodes_1.BasicNode(nodes_1.NodeType.Eol));
}
exports.addEol = addEol;
function tryAddEol(current) {
    var afterAdd = contentFunctions.tryAddLiteralNode(current);
    if (!afterAdd.hasContent || contentFunctions.afterForceEol(afterAdd)) {
        return afterAdd;
    }
    return addEol(afterAdd);
}
exports.tryAddEol = tryAddEol;
function addForceEol(current) {
    var afterAdd = contentFunctions.forceAddContent(current);
    return group.addNode(afterAdd, new nodes_1.BasicNode(nodes_1.NodeType.ForceEol));
}
exports.addForceEol = addForceEol;
//# sourceMappingURL=eol.js.map