"use strict";
exports.__esModule = true;
var wrappedParser_1 = require("./helpers/wrappedParser");
var expectNode = require("./helpers/expectNode");
describe('parser/comment', function () {
    it('should return comment node without leading spaces and linefeed', function () {
        var src = "   @*this is a comment*@ \n";
        var res = wrappedParser_1["default"](src);
        expectNode.root(res, 1);
        expectNode.comment(res.children[0], 'this is a comment');
    });
});
//# sourceMappingURL=commentTests.js.map