"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addNode(current, node) {
    return Object.assign({}, current, { hasContent: true, content: '', children: [...current.children, node] });
}
exports.addNode = addNode;
//# sourceMappingURL=group.js.map