import { RootNode } from '../../nodes';
import { IConfig } from '../config';
import { startFile } from '../common/fileGen';
import { generateFileContent } from './generateFileContent';

export function generate(node: RootNode, config: IConfig): string {
  const stringGen = startFile(config);
  generateFileContent(stringGen, node, config);
  return stringGen.toString();
}
