import Node from './Node';
import NodeType from './NodeType';

class SimpleConfigNode extends Node {
    constructor(public token: string, public content: string) {
        super(NodeType.SimpleConfig);
    }
}

export default SimpleConfigNode;
