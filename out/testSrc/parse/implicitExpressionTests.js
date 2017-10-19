"use strict";
exports.__esModule = true;
var wrappedParser_1 = require("./helpers/wrappedParser");
var expectNode = require("./helpers/expectNode");
describe('parser/implicitExpression', function () {
    it('should treat @@ as escaped @', function () {
        var src = 'aaa@@bbb ccc';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 1);
        expectNode.literal(res.children[0], 'aaa@bbb ccc');
    });
    it('should return expression node', function () {
        var src = 'aaa@bbb ccc';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 3);
        expectNode.literal(res.children[0], 'aaa');
        expectNode.expression(res.children[1], 'bbb');
        expectNode.literal(res.children[2], ' ccc');
    });
    it('should return 2 expression nodes in a row', function () {
        var src = '@bbb@ccc';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 2);
        expectNode.expression(res.children[0], 'bbb');
        expectNode.expression(res.children[1], 'ccc');
    });
    it('should return expression node and eol node', function () {
        var src = '@bbb\nccc';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 3);
        expectNode.expression(res.children[0], 'bbb');
        expectNode.eol(res.children[1]);
        expectNode.literal(res.children[2], 'ccc');
    });
    it('should return (at) as part of literal if expressions has no meaningful characters', function () {
        var src = '@)';
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 1);
        expectNode.literal(res.children[0], src);
    });
});
//# sourceMappingURL=implicitExpressionTests.js.map