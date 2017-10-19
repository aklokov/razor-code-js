"use strict";
exports.__esModule = true;
var nodes_1 = require("../../../src/nodes");
var chai_1 = require("chai");
function expectNodeType(node, type) {
    chai_1.expect(node.type).to.be.equal(type);
}
function root(node, childrenCount) {
    expectNodeType(node, nodes_1.NodeType.Root);
    if (childrenCount) {
        chai_1.expect(node.children.length).to.be.equal(childrenCount, 'child count in root node is not as expected');
    }
}
exports.root = root;
function config(node, token, content) {
    expectNodeType(node, nodes_1.NodeType.Config);
    var configNode = node;
    chai_1.expect(configNode.token).to.be.equal(token);
    chai_1.expect(configNode.content).to.be.equal(content);
}
exports.config = config;
function contentNode(node, content, type) {
    expectNodeType(node, type);
    var contentNode = node;
    chai_1.expect(contentNode.content).to.be.equal(content);
}
function comment(node, content) {
    contentNode(node, content, nodes_1.NodeType.Comment);
}
exports.comment = comment;
function literal(node, content) {
    contentNode(node, content, nodes_1.NodeType.Literal);
}
exports.literal = literal;
function expression(node, content) {
    contentNode(node, content, nodes_1.NodeType.Expression);
}
exports.expression = expression;
function injection(node, content) {
    contentNode(node, content, nodes_1.NodeType.Injection);
}
exports.injection = injection;
function eol(node) {
    expectNodeType(node, nodes_1.NodeType.Eol);
}
exports.eol = eol;
function forceEol(node) {
    expectNodeType(node, nodes_1.NodeType.ForceEol);
}
exports.forceEol = forceEol;
function rootWithoutConfig(node) {
    var haveConfigNode = node.children.some(function (node) { return node.type === nodes_1.NodeType.Config; });
    chai_1.expect(haveConfigNode).to.be.equal(false, 'config node should not be present');
}
exports.rootWithoutConfig = rootWithoutConfig;
function forEach(node, condition, childCount) {
    expectNodeType(node, nodes_1.NodeType.ForEach);
    var forEachNode = node;
    chai_1.expect(forEachNode.condition).to.be.equal(condition);
    if (childCount) {
        chai_1.expect(forEachNode.children.length).to.be.equal(childCount, 'child count in forEach node is not as expected');
    }
    return forEachNode;
}
exports.forEach = forEach;
function ifNode(node, condition) {
    expectNodeType(node, nodes_1.NodeType.If);
    var ifNode = node;
    chai_1.expect(ifNode.condition).to.be.equal(condition);
    return ifNode;
}
exports.ifNode = ifNode;
function ifChildren(node, ifCount, elseCount) {
    if (elseCount === void 0) { elseCount = 0; }
    chai_1.expect(node.ifChildren.length).to.be.equal(ifCount, 'if node children count is not as expected');
    chai_1.expect(node.elseChildren.length).to.be.equal(elseCount, 'if node children else count is not as expected');
}
exports.ifChildren = ifChildren;
function partial(node, generatorName, parameters, indent) {
    expectNodeType(node, nodes_1.NodeType.Partial);
    var partialNode = node;
    chai_1.expect(partialNode.generatorName).to.be.equal(generatorName);
    chai_1.expect(partialNode.parameters).to.be.equal(parameters);
    chai_1.expect(partialNode.indent).to.be.equal(indent);
}
exports.partial = partial;
//# sourceMappingURL=expectNode.js.map