import BasicNode from './BasicNode';
import NodeType from './NodeType';

class SimpleConfigNode extends BasicNode {
    constructor(public token: string, public content: string) {
        super(NodeType.SimpleConfig);
    }
}

export default SimpleConfigNode;
