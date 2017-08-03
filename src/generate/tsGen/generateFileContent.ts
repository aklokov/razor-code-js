import { RootNode } from '@nodes';
import { IConfig } from '../config';
import { StringGen } from '../common/StringGen';

export function generateFileContent(node: RootNode, config: IConfig, sgen: StringGen): void {
    sgen.append('hello world');
}
