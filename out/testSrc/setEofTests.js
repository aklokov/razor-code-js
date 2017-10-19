"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var tokens_1 = require("../src/tokens");
var setEof_1 = require("../src/parse/setEof");
describe('setEof', function () {
    it('should attach eof if there is none', function () {
        var input = ['a', 'b'];
        var result = setEof_1["default"](input);
        chai_1.expect(result).to.be.deep.equal(['a', 'b', tokens_1.keywords.eof]);
    });
    it('should trim if eof is already present', function () {
        var input = ['a', tokens_1.keywords.eof, 'b'];
        var result = setEof_1["default"](input);
        chai_1.expect(result).to.be.deep.equal(['a', tokens_1.keywords.eof]);
    });
});
//# sourceMappingURL=setEofTests.js.map