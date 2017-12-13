"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../constants");
function lineFeedType(config, content) {
    let newLft = content.trim();
    if (newLft !== constants_1.lineFeedType.windows && newLft !== constants_1.lineFeedType.unix && newLft !== constants_1.lineFeedType.mac) {
        return config;
    }
    return Object.assign({}, config, { lineFeed: newLft });
}
exports.lineFeedType = lineFeedType;
//# sourceMappingURL=lineFeedType.js.map