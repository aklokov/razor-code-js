"use strict";
exports.__esModule = true;
var deepFreeze = require("deep-freeze");
function protect(obj) {
    var serialized = JSON.stringify(obj);
    var deserialized = JSON.parse(serialized);
    return deepFreeze(deserialized);
}
function wrapReducer(reducer) {
    return function wrapper(prev, token) {
        var newState = reducer(prev, token);
        return protect(newState);
    };
}
exports["default"] = wrapReducer;
//# sourceMappingURL=wrapReducer.js.map