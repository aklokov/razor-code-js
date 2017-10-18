import { RootNode } from '../nodes';
import { createConfig } from './config';
import * as tsGen from './tsGen/tsGen';
import * as jsGen from './jsGen/jsGen';
import { language } from '../constants';

export default function generateImpl(rootNode: RootNode): string {
  const config = createConfig(rootNode);
  switch (config.language) {
    case language.typescript:
      return tsGen.generate(rootNode, config);
    case language.javascript:
      return jsGen.generate(rootNode, config);
    default:
      return '/* unsupported language */';
  }
}
