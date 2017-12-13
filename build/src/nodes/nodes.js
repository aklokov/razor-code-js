"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NodeType_1 = require("./NodeType");
class BasicNode {
    constructor(type) {
        this.type = type;
    }
}
exports.BasicNode = BasicNode;
class ContentNode extends BasicNode {
    constructor(content, type) {
        super(type);
        this.content = content;
    }
}
exports.ContentNode = ContentNode;
class LiteralNode extends ContentNode {
    constructor(content) {
        super(content, NodeType_1.NodeType.Literal);
        this.content = content;
    }
}
exports.LiteralNode = LiteralNode;
class ExpressionNode extends ContentNode {
    constructor(content) {
        super(content, NodeType_1.NodeType.Expression);
        this.content = content;
    }
}
exports.ExpressionNode = ExpressionNode;
class InjectionNode extends ContentNode {
    constructor(content) {
        super(content, NodeType_1.NodeType.Injection);
        this.content = content;
    }
}
exports.InjectionNode = InjectionNode;
class ForEachNode extends BasicNode {
    constructor(condition, children) {
        super(NodeType_1.NodeType.ForEach);
        this.condition = condition;
        this.children = children;
    }
}
exports.ForEachNode = ForEachNode;
class IfNode extends BasicNode {
    constructor(condition, ifChildren, elseChildren) {
        super(NodeType_1.NodeType.If);
        this.condition = condition;
        this.ifChildren = ifChildren;
        this.elseChildren = elseChildren;
    }
}
exports.IfNode = IfNode;
class RootNode extends BasicNode {
    constructor(children) {
        super(NodeType_1.NodeType.Root);
        this.children = children;
    }
}
exports.RootNode = RootNode;
class ConfigNode extends BasicNode {
    constructor(token, content) {
        super(NodeType_1.NodeType.Config);
        this.token = token;
        this.content = content;
    }
}
exports.ConfigNode = ConfigNode;
class PartialNode extends BasicNode {
    constructor(generatorName, parameters, indent) {
        super(NodeType_1.NodeType.Partial);
        this.generatorName = generatorName;
        this.parameters = parameters;
        this.indent = indent;
    }
}
exports.PartialNode = PartialNode;
//# sourceMappingURL=nodes.js.map