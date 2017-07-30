import { RootNode } from '../../../src/nodes';
import rootReducer from '../../../src/parse/reduction/rootReducer';
import wrapReducer from './wrapReducer';
import parseImpl from '../../../src/parse/parseImpl';

export default function wrappedParser(source: string): RootNode {
    const reducer = wrapReducer(rootReducer);
    return parseImpl(reducer, source);
}
