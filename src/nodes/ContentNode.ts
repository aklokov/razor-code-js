import Node from './Node';
import NodeType from './NodeType';

class ContentNode extends Node {
    constructor(public content: string) {
        super(NodeType.Content);
    }
}

export default ContentNode;
