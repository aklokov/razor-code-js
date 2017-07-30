import { RootNode, ConfigNode, NodeType, BasicNode } from '../../nodes';
import { IConfig, Language } from './config';
import { keywords } from '../../tokens';
import * as parsers from './parsers';

function optionsReducer(acc: IConfig, node: BasicNode, index: number, array: BasicNode[]): IConfig {
    const configNode = node as ConfigNode;
    switch (configNode.token) {
        case keywords.language:
            return parsers.language(acc, configNode.content);
        default:
            return acc;
    }
}

export function createConfig(root: RootNode): IConfig {
    const configNodes = root.children.filter(node => node.type === NodeType.Config);
    const defaultConfig = {
        language: Language.TypeScript
    };
    return configNodes.reduce<IConfig>(optionsReducer, defaultConfig);
}
