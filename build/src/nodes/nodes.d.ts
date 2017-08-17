import { NodeType } from './NodeType';
export declare class BasicNode {
    type: NodeType;
    uuid: string;
    constructor(type: NodeType);
}
export declare class ContentNode extends BasicNode {
    content: string;
    constructor(content: string, type: NodeType);
}
export declare class LiteralNode extends ContentNode {
    content: string;
    constructor(content: string);
}
export declare class ExpressionNode extends ContentNode {
    content: string;
    constructor(content: string);
}
export declare class InjectionNode extends ContentNode {
    content: string;
    constructor(content: string);
}
export declare class ForEachNode extends BasicNode {
    condition: string;
    children: BasicNode[];
    constructor(condition: string, children: BasicNode[]);
}
export declare class IfNode extends BasicNode {
    condition: string;
    ifChildren: BasicNode[];
    elseChildren: BasicNode[];
    constructor(condition: string, ifChildren: BasicNode[], elseChildren: BasicNode[]);
}
export declare class RootNode extends BasicNode {
    children: BasicNode[];
    constructor(children: BasicNode[]);
}
export declare class ConfigNode extends BasicNode {
    token: string;
    content: string;
    constructor(token: string, content: string);
}
export declare class PartialNode extends BasicNode {
    generatorName: string;
    parameters: string;
    indent: string;
    constructor(generatorName: string, parameters: string, indent: string);
}
