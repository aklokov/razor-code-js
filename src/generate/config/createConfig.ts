import { RootNode, ConfigNode, NodeType, BasicNode } from '@nodes';
import { IConfig } from './config';
import { keywords } from '@src/tokens';
import * as parsers from './parsers';
import { lineFeedType, language } from '@src/constants';

function optionsReducer(config: IConfig, node: BasicNode): IConfig {
    const configNode = node as ConfigNode;
    switch (configNode.token) {
        case keywords.language: return parsers.language(config, configNode.content);
        case keywords.parameters: return parsers.parameters(config, configNode.content);
        case keywords.exportName: return parsers.exportName(config, configNode.content);
        case keywords.import: return parsers.imports(config, configNode.content);
        case keywords.lineFeedType: return parsers.lineFeedType(config, configNode.content);
        default:
            return config;
    }
}

export function createConfig(root: RootNode): IConfig {
    const configNodes = root.children.filter(node => node.type === NodeType.Config);
    const defaultConfig = {
        language: language.typescript,
        lineFeed: lineFeedType.unix,
        parameters: [],
        imports: [],
        exportName: 'generator'
    };

    return configNodes.reduce(optionsReducer, defaultConfig);
}
