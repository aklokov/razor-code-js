"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var NodeType_1 = require("./NodeType");
var BasicNode = (function () {
    function BasicNode(type) {
        this.type = type;
    }
    return BasicNode;
}());
exports.BasicNode = BasicNode;
var ContentNode = (function (_super) {
    __extends(ContentNode, _super);
    function ContentNode(content, type) {
        var _this = _super.call(this, type) || this;
        _this.content = content;
        return _this;
    }
    return ContentNode;
}(BasicNode));
exports.ContentNode = ContentNode;
var LiteralNode = (function (_super) {
    __extends(LiteralNode, _super);
    function LiteralNode(content) {
        var _this = _super.call(this, content, NodeType_1.NodeType.Literal) || this;
        _this.content = content;
        return _this;
    }
    return LiteralNode;
}(ContentNode));
exports.LiteralNode = LiteralNode;
var ExpressionNode = (function (_super) {
    __extends(ExpressionNode, _super);
    function ExpressionNode(content) {
        var _this = _super.call(this, content, NodeType_1.NodeType.Expression) || this;
        _this.content = content;
        return _this;
    }
    return ExpressionNode;
}(ContentNode));
exports.ExpressionNode = ExpressionNode;
var InjectionNode = (function (_super) {
    __extends(InjectionNode, _super);
    function InjectionNode(content) {
        var _this = _super.call(this, content, NodeType_1.NodeType.Injection) || this;
        _this.content = content;
        return _this;
    }
    return InjectionNode;
}(ContentNode));
exports.InjectionNode = InjectionNode;
var ForEachNode = (function (_super) {
    __extends(ForEachNode, _super);
    function ForEachNode(condition, children) {
        var _this = _super.call(this, NodeType_1.NodeType.ForEach) || this;
        _this.condition = condition;
        _this.children = children;
        return _this;
    }
    return ForEachNode;
}(BasicNode));
exports.ForEachNode = ForEachNode;
var IfNode = (function (_super) {
    __extends(IfNode, _super);
    function IfNode(condition, ifChildren, elseChildren) {
        var _this = _super.call(this, NodeType_1.NodeType.If) || this;
        _this.condition = condition;
        _this.ifChildren = ifChildren;
        _this.elseChildren = elseChildren;
        return _this;
    }
    return IfNode;
}(BasicNode));
exports.IfNode = IfNode;
var RootNode = (function (_super) {
    __extends(RootNode, _super);
    function RootNode(children) {
        var _this = _super.call(this, NodeType_1.NodeType.Root) || this;
        _this.children = children;
        return _this;
    }
    return RootNode;
}(BasicNode));
exports.RootNode = RootNode;
var ConfigNode = (function (_super) {
    __extends(ConfigNode, _super);
    function ConfigNode(token, content) {
        var _this = _super.call(this, NodeType_1.NodeType.Config) || this;
        _this.token = token;
        _this.content = content;
        return _this;
    }
    return ConfigNode;
}(BasicNode));
exports.ConfigNode = ConfigNode;
var PartialNode = (function (_super) {
    __extends(PartialNode, _super);
    function PartialNode(generatorName, parameters, indent) {
        var _this = _super.call(this, NodeType_1.NodeType.Partial) || this;
        _this.generatorName = generatorName;
        _this.parameters = parameters;
        _this.indent = indent;
        return _this;
    }
    return PartialNode;
}(BasicNode));
exports.PartialNode = PartialNode;
//# sourceMappingURL=nodes.js.map