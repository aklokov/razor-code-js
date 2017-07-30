import { RootNode, ConfigNode, NodeType, BasicNode } from '../../nodes';
import { IConfig, Language } from './config';
import { keywords } from '../../tokens';
import * as parsers from './parsers';

function optionsReducer(config: IConfig, node: BasicNode): IConfig {
    const configNode = node as ConfigNode;
    switch (configNode.token) {
        case keywords.language:
            return parsers.language(config, configNode.content);
        default:
            return config;
    }
}

export function createConfig(root: RootNode): IConfig {
    const configNodes = root.children.filter(node => node.type === NodeType.Config);
    const defaultConfig = {
        language: Language.TypeScript
    };
    return configNodes.reduce(optionsReducer, defaultConfig);
}
