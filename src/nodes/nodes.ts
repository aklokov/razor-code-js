import NodeType from './NodeType';
import * as uuid from 'uuid';

export class BasicNode {
    public uuid: string;
    constructor(public type: NodeType) {
        this.uuid = uuid.v1();
    }
}

export class ContentNode extends BasicNode {
    constructor(public content: string) {
        super(NodeType.Content);
    }
}

export class RootNode extends BasicNode {
    constructor(public children: BasicNode[]) {
        super(NodeType.Root);
    }
}

export class SimpleConfigNode extends BasicNode {
    constructor(public token: string, public content: string) {
        super(NodeType.SimpleConfig);
    }
}
