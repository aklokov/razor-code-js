import Node from './Node';
import NodeType from './NodeType';

class SimpleConfigNode extends Node {
    constructor(public configToken: string) {
        super(NodeType.SimpleConfig);
    }
}

export default SimpleConfigNode;
