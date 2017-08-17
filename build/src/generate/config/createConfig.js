"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodes_1 = require("../../nodes");
const tokens_1 = require("../../tokens");
const parsers = require("./parsers");
const constants_1 = require("../../constants");
function optionsReducer(config, node) {
    const configNode = node;
    switch (configNode.token) {
        case tokens_1.keywords.language: return parsers.language(config, configNode.content);
        case tokens_1.keywords.parameters: return parsers.parameters(config, configNode.content);
        case tokens_1.keywords.exportName: return parsers.exportName(config, configNode.content);
        case tokens_1.keywords.import: return parsers.imports(config, configNode.content);
        case tokens_1.keywords.lineFeedType: return parsers.lineFeedType(config, configNode.content);
        default:
            return config;
    }
}
function createConfig(root) {
    const configNodes = root.children.filter(node => node.type === nodes_1.NodeType.Config);
    const defaultConfig = {
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