"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("../../tools");
const constants_1 = require("../../constants");
const hash_map_1 = require("hash-map");
const dict = hash_map_1.map();
dict[constants_1.lineFeedType.mac] = '\r';
dict[constants_1.lineFeedType.unix] = '\n';
dict[constants_1.lineFeedType.windows] = '\r\n';
class StringGen {
    constructor(lineFeed = constants_1.lineFeedType.unix) {
        this.currentIndent = 0;
        this.strings = [];
        this.eol = false;
        this.lineFeed = dict[lineFeed];
    }
    pushIndent(amount = 1) {
        this.currentIndent += amount;
    }
    popIndent(amount = 1) {
        this.currentIndent -= amount;
        if (this.currentIndent < 0) {
            throw new Error('Indent error.');
        }
    }
    appendLine(line = '') {
        if (!line.length) {
            this.appendLineFeed();
            return;
        }
        this.append(line);
        this.appendLineFeed();
    }
    append(text) {
        if (this.eol) {
            this.appendIndent();
        }
        this.strings.push(text);
        this.eol = false;
    }
    braces(func) {
        this.bracesImpl(func, '}');
    }
    bracesSemicolon(func) {
        this.bracesImpl(func, '};');
    }
    toString() {
        if (this.currentIndent > 0) {
            throw new Error('indent error');
        }
        return this.strings.join('');
    }
    bracesImpl(func, ending) {
        this.append('{');
        this.appendLine();
        this.pushIndent();
        func();
        this.popIndent();
        this.appendLine(ending);
    }
    appendLineFeed() {
        this.eol = true;
        this.strings.push(this.lineFeed);
    }
    appendIndent() {
        if (this.currentIndent > 0) {
            this.strings.push(tools_1.createIndent(this.currentIndent));
        }
    }
}
exports.StringGen = StringGen;
//# sourceMappingURL=StringGen.js.map