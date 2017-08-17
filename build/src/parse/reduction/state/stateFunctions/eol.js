"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodes_1 = require("../../../../nodes");
const contentFunctions = require("./content");
const group = require("./group");
function addEol(current) {
    return group.addNode(current, new nodes_1.BasicNode(nodes_1.NodeType.Eol));
}
exports.addEol = addEol;
function tryAddEol(current) {
    const afterAdd = contentFunctions.tryAddLiteralNode(current);
    if (!afterAdd.hasContent || contentFunctions.afterForceEol(afterAdd)) {
        return afterAdd;
    }
    return addEol(afterAdd);
}
exports.tryAddEol = tryAddEol;
function addForceEol(current) {
    const afterAdd = contentFunctions.forceAddContent(current);
    return group.addNode(afterAdd, new nodes_1.BasicNode(nodes_1.NodeType.ForceEol));
}
exports.addForceEol = addForceEol;
//# sourceMappingURL=eol.js.map