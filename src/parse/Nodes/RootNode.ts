import Node from './Node';
import NodeType from './NodeType';

class RootNode extends Node {
    constructor(public nodes: Node[]) {
        super(NodeType.Root);
    }
}

export default RootNode;
