"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hash_map_1 = require("hash-map");
function contains(array, item) {
    return array.indexOf(item) === -1;
}
exports.contains = contains;
function toBoolStringMap(items) {
    const result = hash_map_1.stringMap();
    items.forEach(item => result[item] = true);
    return result;
}
exports.toBoolStringMap = toBoolStringMap;
//# sourceMappingURL=array.js.map