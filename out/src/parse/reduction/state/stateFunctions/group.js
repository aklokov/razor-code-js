"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
function addNode(current, node) {
    return __assign({}, current, { hasContent: true, content: '', children: current.children.concat([node]) });
}
exports.addNode = addNode;
//# sourceMappingURL=group.js.map