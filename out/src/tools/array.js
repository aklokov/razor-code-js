"use strict";
exports.__esModule = true;
function contains(array, item) {
    return array.indexOf(item) === -1;
}
exports.contains = contains;
function toBoolStringMap(items) {
    var result = {};
    items.forEach(function (item) { return result[item] = true; });
    return result;
}
exports.toBoolStringMap = toBoolStringMap;
//# sourceMappingURL=array.js.map