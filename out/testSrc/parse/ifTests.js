"use strict";
exports.__esModule = true;
var wrappedParser_1 = require("./helpers/wrappedParser");
var expectNode = require("./helpers/expectNode");
describe('parser/if', function () {
    it('should return if node with literal node', function () {
        var src = '@if(let a of b){a}';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 1);
        var ifNode = expectNode.ifNode(res.children[0], 'let a of b');
        expectNode.ifChildren(ifNode, 1);
        expectNode.literal(ifNode.ifChildren[0], 'a');
    });
    it('should return if node with else and literal nodes', function () {
        var src = '@if(let a of b){a}else{b}';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 1);
        var ifNode = expectNode.ifNode(res.children[0], 'let a of b');
        expectNode.ifChildren(ifNode, 1, 1);
        expectNode.literal(ifNode.ifChildren[0], 'a');
        expectNode.literal(ifNode.elseChildren[0], 'b');
    });
    it('should return if node with spaced else and second curly brace', function () {
        var src = '@if(let a of b){a}   else   {b}';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 1);
        var ifNode = expectNode.ifNode(res.children[0], 'let a of b');
        expectNode.ifChildren(ifNode, 1, 1);
        expectNode.literal(ifNode.ifChildren[0], 'a');
        expectNode.literal(ifNode.elseChildren[0], 'b');
    });
    it('should treat else as content if curly brace not found', function () {
        var src = '@if(let a of b){a}else a';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 2);
        var ifNode = expectNode.ifNode(res.children[0], 'let a of b');
        expectNode.ifChildren(ifNode, 1, 0);
        expectNode.literal(ifNode.ifChildren[0], 'a');
        expectNode.literal(res.children[1], 'else a');
    });
    it('should return if multiline node with else', function () {
        var src = "@if(let a of b){\n            a\n        } else {b}";
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 1);
        var ifNode = expectNode.ifNode(res.children[0], 'let a of b');
        expectNode.ifChildren(ifNode, 2, 1);
        expectNode.literal(ifNode.ifChildren[0], '            a');
        expectNode.eol(ifNode.ifChildren[1]);
        expectNode.literal(ifNode.elseChildren[0], 'b');
    });
    it('should return if node with multiline else', function () {
        var src = "@if(let a of b){a} else {\n            b\n        }";
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 1);
        var ifNode = expectNode.ifNode(res.children[0], 'let a of b');
        expectNode.ifChildren(ifNode, 1, 2);
        expectNode.literal(ifNode.ifChildren[0], 'a');
        expectNode.literal(ifNode.elseChildren[0], '            b');
        expectNode.eol(ifNode.elseChildren[1]);
    });
});
//# sourceMappingURL=ifTests.js.map