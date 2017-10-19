"use strict";
exports.__esModule = true;
var wrappedParser_1 = require("./helpers/wrappedParser");
var expectNode = require("./helpers/expectNode");
describe('parser/forEach', function () {
    it('should return foreach node with literal node', function () {
        var src = '@foreach(let a of b){a}';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 1);
        var forEach = expectNode.forEach(res.children[0], 'let a of b', 1);
        expectNode.literal(forEach.children[0], 'a');
    });
    it('should return foreach node with spaced curly brace', function () {
        var src = '@foreach(let a of b)   {a}';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 1);
        var forEach = expectNode.forEach(res.children[0], 'let a of b', 1);
        expectNode.literal(forEach.children[0], 'a');
    });
    it('should fallback from foreach if no brace found', function () {
        var src = '@foreach(let a of b)   abc';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 1);
        expectNode.literal(res.children[0], '   abc');
    });
    it('should fallback from foreach if eof', function () {
        var src = 'a@foreach(let a of b)';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 1);
        expectNode.literal(res.children[0], 'a');
    });
    it('should return foreach node with deep brackets inside condition', function () {
        var src = '@foreach(let a of b(x["z" < \'d\'])){a}';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 1);
        var forEach = expectNode.forEach(res.children[0], 'let a of b(x["z" < \'d\'])', 1);
        expectNode.literal(forEach.children[0], 'a');
    });
    it('should treat closing curly brace as text if prepended by literal on the same line', function () {
        var src = "@foreach(let a of b){\n    aasd{f}\n}";
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 1);
        var forEach = expectNode.forEach(res.children[0], 'let a of b', 2);
        expectNode.literal(forEach.children[0], '    aasd{f}');
        expectNode.eol(forEach.children[1]);
    });
    it('should treat escaped curly brace as text', function () {
        var src = "@foreach(let a of b){\n    aasd{f}\n    @}\n}";
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 1);
        var forEach = expectNode.forEach(res.children[0], 'let a of b', 4);
        expectNode.literal(forEach.children[0], '    aasd{f}');
        expectNode.eol(forEach.children[1]);
        expectNode.literal(forEach.children[2], '    }');
        expectNode.eol(forEach.children[3]);
    });
    it('should return foreach node with 2 lines of literals', function () {
        var src = "@foreach(let a of b){\n    aasdf\n    sdfsg\n}";
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 1);
        var forEach = expectNode.forEach(res.children[0], 'let a of b', 4);
        expectNode.literal(forEach.children[0], '    aasdf');
        expectNode.eol(forEach.children[1]);
        expectNode.literal(forEach.children[2], '    sdfsg');
        expectNode.eol(forEach.children[3]);
    });
    it('should return foreach inside foreach', function () {
        var src = "@foreach(let a of b){\n    aasdf\n    @foreach(let c of a){\n    sdfsg\n    }\n}";
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 1);
        var forEach = expectNode.forEach(res.children[0], 'let a of b', 3);
        expectNode.literal(forEach.children[0], '    aasdf');
        expectNode.eol(forEach.children[1]);
        var forEach2 = expectNode.forEach(forEach.children[2], 'let c of a', 2);
        expectNode.literal(forEach2.children[0], '    sdfsg');
        expectNode.eol(forEach2.children[1]);
    });
});
//# sourceMappingURL=foreachTests.js.map