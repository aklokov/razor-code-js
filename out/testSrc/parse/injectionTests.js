"use strict";
exports.__esModule = true;
var wrappedParser_1 = require("./helpers/wrappedParser");
var expectNode = require("./helpers/expectNode");
describe('parser/injection', function () {
    it('should return injection node', function () {
        var src = 'aaa@{let a = b} ccc';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 3);
        expectNode.literal(res.children[0], 'aaa');
        expectNode.injection(res.children[1], 'let a = b');
        expectNode.literal(res.children[2], ' ccc');
    });
    it('should return deep brackets in injection', function () {
        var src = '@{let x = bbb<as>(sadf[new a{\'b\' = "x"}]);}';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 1);
        expectNode.injection(res.children[0], 'let x = bbb<as>(sadf[new a{\'b\' = "x"}]);');
    });
});
//# sourceMappingURL=injectionTests.js.map