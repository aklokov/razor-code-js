import BasicNode from './BasicNode';
import NodeType from './NodeType';

class RootNode extends BasicNode {
    constructor(public nodes: BasicNode[]) {
        super(NodeType.Root);
    }
}

export default RootNode;
