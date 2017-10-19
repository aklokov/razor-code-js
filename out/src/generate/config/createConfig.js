"use strict";
exports.__esModule = true;
var nodes_1 = require("../../nodes");
var tokens_1 = require("../../tokens");
var parsers = require("./parsers");
var constants_1 = require("../../constants");
function optionsReducer(config, node) {
    var configNode = node;
    switch (configNode.token) {
        case tokens_1.keywords.language: return parsers.language(config, configNode.content);
        case tokens_1.keywords.parameters: return parsers.parameters(config, configNode.content);
        case tokens_1.keywords.exportName: return parsers.exportName(config, configNode.content);
        case tokens_1.keywords["import"]: return parsers.imports(config, configNode.content);
        case tokens_1.keywords.lineFeedType: return parsers.lineFeedType(config, configNode.content);
        default:
            return config;
    }
}
function createConfig(root) {
    var configNodes = root.children.filter(function (node) { return node.type === nodes_1.NodeType.Config; });
    var defaultConfig = {
        language: constants_1.language.typescript,
        lineFeed: constants_1.lineFeedType.unix,
        parameters: [],
        imports: [],
        exportName: 'generator'
    };
    return configNodes.reduce(optionsReducer, defaultConfig);
}
exports.createConfig = createConfig;
//# sourceMappingURL=createConfig.js.map