import BasicNode from './BasicNode';
import NodeType from './NodeType';

class ContentNode extends BasicNode {
    constructor(public content: string) {
        super(NodeType.Content);
    }
}

export default ContentNode;
