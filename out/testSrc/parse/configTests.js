"use strict";
exports.__esModule = true;
var wrappedParser_1 = require("./helpers/wrappedParser");
var tokens_1 = require("../../src/tokens");
var expectNode = require("./helpers/expectNode");
describe('parser/config', function () {
    it('should return config node', function () {
        var src = '@namespace asdf fre arfs\n';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 1);
        expectNode.config(res.children[0], tokens_1.keywords.namespace, 'asdf fre arfs');
    });
    it('should not return config node after content node', function () {
        var src = 'some @using asdf fre arfs\n';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res);
        expectNode.rootWithoutConfig(res);
    });
    it('should not return config node after force eol node', function () {
        var src = "   @eol\n        @using asdf fre arfs\n";
        var res = wrappedParser_1["default"](src);
        expectNode.root(res);
        expectNode.rootWithoutConfig(res);
    });
    it('should ignore empty line before config node', function () {
        var src = "\n        @using aaa\n";
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 1);
        expectNode.config(res.children[0], tokens_1.keywords.using, 'aaa');
    });
});
//# sourceMappingURL=configTests.js.map