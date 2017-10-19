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
var constants_1 = require("../../../constants");
function lineFeedType(config, content) {
    var newLft = content.trim();
    if (newLft !== constants_1.lineFeedType.windows && newLft !== constants_1.lineFeedType.unix && newLft !== constants_1.lineFeedType.mac) {
        return config;
    }
    return __assign({}, config, { lineFeed: newLft });
}
exports.lineFeedType = lineFeedType;
//# sourceMappingURL=lineFeedType.js.map