"use strict";
exports.__esModule = true;
var wrappedParser_1 = require("./helpers/wrappedParser");
var expectNode = require("./helpers/expectNode");
describe('parser/brackets', function () {
    it('should return parentheses as part of expression node', function () {
        var src = '@a(b).c d';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 2);
        expectNode.expression(res.children[0], 'a(b).c');
        expectNode.literal(res.children[1], ' d');
    });
    it('should return square brackets as part of expression node', function () {
        var src = '@a[b].c d';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 2);
        expectNode.expression(res.children[0], 'a[b].c');
        expectNode.literal(res.children[1], ' d');
    });
    it('should return angle brackets as part of expression node', function () {
        var src = '@a<b>(c) d';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 2);
        expectNode.expression(res.children[0], 'a<b>(c)');
        expectNode.literal(res.children[1], ' d');
    });
    it('should treat other brackets inside angle bracket as text', function () {
        var src = '@a<[({> d';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 2);
        expectNode.expression(res.children[0], 'a<[({>');
        expectNode.literal(res.children[1], ' d');
    });
    it('should return deep brackets as part of expression node', function () {
        var src = '@a(c[d<b>()(new a{b=1})]) d';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 2);
        expectNode.expression(res.children[0], 'a(c[d<b>()(new a{b=1})])');
        expectNode.literal(res.children[1], ' d');
    });
    it('should treat angle bracket as text if followed by space', function () {
        var src = '@a(b < c) d';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 2);
        expectNode.expression(res.children[0], 'a(b < c)');
        expectNode.literal(res.children[1], ' d');
    });
    it('should return quotes as part of expression node', function () {
        var src = '@a("b") d';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 2);
        expectNode.expression(res.children[0], 'a("b")');
        expectNode.literal(res.children[1], ' d');
    });
    it('should respect escapes inside quotes', function () {
        var src = '@a(a["b\\"a"]) d';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 2);
        expectNode.expression(res.children[0], 'a(a["b\\"a"])');
        expectNode.literal(res.children[1], ' d');
    });
    it('should return apostrophes as part of expression node', function () {
        var src = '@a(\'b\') d';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 2);
        expectNode.expression(res.children[0], 'a(\'b\')');
        expectNode.literal(res.children[1], ' d');
    });
    it('should respect escapes inside apostrophes', function () {
        var src = '@a(a[\'b\\\'a\']) d';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 2);
        expectNode.expression(res.children[0], 'a(a[\'b\\\'a\'])');
        expectNode.literal(res.children[1], ' d');
    });
    it('should return curly braces as part of expression node', function () {
        var src = '@a(new b{x = 1}) d';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 2);
        expectNode.expression(res.children[0], 'a(new b{x = 1})');
        expectNode.literal(res.children[1], ' d');
    });
});
//# sourceMappingURL=bracketTests.js.map