"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var config_1 = require("../../src/generate/config");
var constants_1 = require("../../src/constants");
var nodes_1 = require("../../src/nodes");
var tokens_1 = require("../../src/tokens");
describe('createConfig/language', function () {
    it('should set language and windows linefeed for csharp', function () {
        var languageNode = new nodes_1.ConfigNode(tokens_1.keywords.language, constants_1.language.csharp);
        var root = new nodes_1.RootNode([languageNode]);
        var result = config_1.createConfig(root);
        chai_1.expect(result.language).to.be.equal(constants_1.language.csharp);
        chai_1.expect(result.lineFeed).to.be.equal(constants_1.lineFeedType.windows);
    });
    it('should language and unix linefeed for typescript', function () {
        var languageNode = new nodes_1.ConfigNode(tokens_1.keywords.language, constants_1.language.typescript);
        var root = new nodes_1.RootNode([languageNode]);
        var result = config_1.createConfig(root);
        chai_1.expect(result.language).to.be.equal(constants_1.language.typescript);
        chai_1.expect(result.lineFeed).to.be.equal(constants_1.lineFeedType.unix);
    });
    it('should default to typescript if language is not present', function () {
        var root = new nodes_1.RootNode([]);
        var result = config_1.createConfig(root);
        chai_1.expect(result.language).to.be.equal(constants_1.language.typescript);
        chai_1.expect(result.lineFeed).to.be.equal(constants_1.lineFeedType.unix);
    });
    it('should default to typescript if language is not recognized', function () {
        var languageNode = new nodes_1.ConfigNode(tokens_1.keywords.language, 'fs');
        var root = new nodes_1.RootNode([languageNode]);
        var result = config_1.createConfig(root);
        chai_1.expect(result.language).to.be.equal(constants_1.language.typescript);
        chai_1.expect(result.lineFeed).to.be.equal(constants_1.lineFeedType.unix);
    });
});
//# sourceMappingURL=languageTests.js.map