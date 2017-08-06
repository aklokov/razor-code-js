import { NodeType } from './NodeType';

export class BasicNode {
    public uuid: string;
    constructor(public type: NodeType) { }
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

export class ForEachNode extends BasicNode {
    constructor(public condition: string, public children: BasicNode[]) {
        super(NodeType.ForEach);
    }
}

export class IfNode extends BasicNode {
    constructor(public condition: string, public ifChildren: BasicNode[], public elseChildren: BasicNode[]) {
        super(NodeType.If);
    }
}

export class RootNode extends BasicNode {
    constructor(public children: BasicNode[]) {
        super(NodeType.Root);
    }
}

export class ConfigNode extends BasicNode {
    constructor(public token: string, public content: string) {
        super(NodeType.Config);
    }
}

export class PartialNode extends BasicNode {
    constructor(public generatorName:string, public parameters:string){
        super(NodeType.Partial);
    }
}
