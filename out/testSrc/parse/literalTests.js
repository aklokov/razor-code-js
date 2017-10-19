"use strict";
exports.__esModule = true;
var wrappedParser_1 = require("./helpers/wrappedParser");
var expectNode = require("./helpers/expectNode");
describe('parser/literal', function () {
    it('should return literal node', function () {
        var src = 'using asdf fre arfs';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 1);
        expectNode.literal(res.children[0], src);
    });
    it('should return 2 literal nodes and eol in between', function () {
        var src = 'aaa\nbbb';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 3);
        expectNode.literal(res.children[0], 'aaa');
        expectNode.eol(res.children[1]);
        expectNode.literal(res.children[2], 'bbb');
    });
    it('should treat windows linebreaks the same way', function () {
        var src = 'aaa\r\nbbb';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 3);
        expectNode.literal(res.children[0], 'aaa');
        expectNode.eol(res.children[1]);
        expectNode.literal(res.children[2], 'bbb');
    });
    it('should treat mac linebreaks the same way', function () {
        var src = 'aaa\rbbb';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 3);
        expectNode.literal(res.children[0], 'aaa');
        expectNode.eol(res.children[1]);
        expectNode.literal(res.children[2], 'bbb');
    });
    it('should return 7 nodes', function () {
        var src = "aaa\n        bbb\n        ccc\n        ddd";
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 7);
    });
    it('should skip empty lines before literal', function () {
        var src = "    \n        \n   aaa";
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 1);
        expectNode.literal(res.children[0], '   aaa');
    });
    it('should not skip empty lines with force eol', function () {
        var src = "    \n   @eol\n   aaa";
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 3);
        expectNode.literal(res.children[0], '   ');
        expectNode.forceEol(res.children[1]);
        expectNode.literal(res.children[2], '   aaa');
    });
    it('should skip empty literal and eol after force eol', function () {
        var src = "    \n   @eol  \n";
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 2);
        expectNode.literal(res.children[0], '   ');
        expectNode.forceEol(res.children[1]);
    });
    it('should not skip non-empty literal after force eol', function () {
        var src = "    \n@eol   aaa\n";
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 3);
        expectNode.forceEol(res.children[0]);
        expectNode.literal(res.children[1], '   aaa');
        expectNode.eol(res.children[2]);
    });
});
//# sourceMappingURL=literalTests.js.map