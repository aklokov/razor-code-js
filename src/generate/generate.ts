import { RootNode } from '@nodes';
import { createConfig } from './config';
import * as tsGen from './tsGen';
import { language } from '@src/constants';

export default function generateImpl(rootNode: RootNode): string {
    const config = createConfig(rootNode);
    switch (config.language) {
        case language.typescript:
            return tsGen.generate(rootNode, config);
        default:
            return '/* unsupported language */';
    }
}
