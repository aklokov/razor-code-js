"use strict";
exports.__esModule = true;
var wrappedParser_1 = require("./helpers/wrappedParser");
var expectNode = require("./helpers/expectNode");
describe('parser/partial', function () {
    it('should return partial node with no indent', function () {
        var src = '@[aaa(bbb)]';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 1);
        expectNode.partial(res.children[0], 'aaa', 'bbb', '');
    });
    it('should return partial node with indent', function () {
        var src = '   @[aaa(bbb)]';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 1);
        expectNode.partial(res.children[0], 'aaa', 'bbb', '   ');
    });
    it('should return partial node with indent after eod', function () {
        var src = "hi\n    @[aaa(bbb)]";
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 3);
        expectNode.literal(res.children[0], 'hi');
        expectNode.eol(res.children[1]);
        expectNode.partial(res.children[2], 'aaa', 'bbb', '    ');
    });
});
//# sourceMappingURL=partialTests.js.map