import Node from './Node';
import NodeType from './NodeType';

class DocumentNode extends Node {
    constructor() {
        super(NodeType.Document);
    }
}

export default Document;
