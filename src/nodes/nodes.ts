import NodeType from './NodeType';
import * as uuid from 'uuid';

export class BasicNode {
    public uuid: string;
    constructor(public type: NodeType) {
        this.uuid = uuid.v1();
    }
}

export class ContentNode extends BasicNode {
    constructor(public content: string, type: NodeType) {
        super(type);
    }
}

export class LiteralNode extends ContentNode {
    constructor(public content: string) {
        super(content, NodeType.Literal);
    }
}

export class ExpressionNode extends ContentNode {
    constructor(public content: string) {
        super(content, NodeType.Expression);
    }
}

export class InjectionNode extends ContentNode {
    constructor(public content: string) {
        super(content, NodeType.Injection);
    }
}

export class RootNode extends BasicNode {
    constructor(public children: BasicNode[]) {
        super(NodeType.Root);
    }
}

export class ConfigNode extends BasicNode {
    constructor(public token: string, public content: string) {
        super(NodeType.SimpleConfig);
    }
}
