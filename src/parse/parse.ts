import { RootNode } from '../nodes';
import rootReducer from './reduction/rootReducer';
import parseImpl from './parseImpl';

export default function parse(source: string): RootNode {
    return parseImpl(rootReducer, source);
}
