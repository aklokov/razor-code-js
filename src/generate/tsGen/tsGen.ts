import { RootNode } from '../../nodes';
import { IConfig } from '../config';
import { startFile } from '../common/fileGen';
import { generateFileContent } from './fileContent';

export function generate(node: RootNode, config: IConfig): string {
    const stringGen = startFile(config);
    generateFileContent(stringGen, node, config);
    return stringGen.toString();
}
