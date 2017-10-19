"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var config_1 = require("../../src/generate/config");
var nodes_1 = require("../../src/nodes");
var tokens_1 = require("../../src/tokens");
describe('createConfig/parameters', function () {
    it('should return single parameter', function () {
        var paramNode = new nodes_1.ConfigNode(tokens_1.keywords.parameters, 'name');
        var root = new nodes_1.RootNode([paramNode]);
        var result = config_1.createConfig(root);
        chai_1.expect(result.parameters).to.be.deep.equal(['name']);
    });
    it('should return two parameters with generic types', function () {
        var paramNode = new nodes_1.ConfigNode(tokens_1.keywords.parameters, 'employee: Container<IEmployee>, map: SomeMap<string, number>');
        var root = new nodes_1.RootNode([paramNode]);
        var result = config_1.createConfig(root);
        chai_1.expect(result.parameters).to.be.deep.equal(['employee: Container<IEmployee>', 'map: SomeMap<string, number>']);
    });
});
//# sourceMappingURL=parameterTests.js.map