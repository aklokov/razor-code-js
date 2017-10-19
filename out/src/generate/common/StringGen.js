"use strict";
exports.__esModule = true;
var createIndent_1 = require("./createIndent");
var constants_1 = require("../../constants");
var dict = {};
dict[constants_1.lineFeedType.mac] = '\r';
dict[constants_1.lineFeedType.unix] = '\n';
dict[constants_1.lineFeedType.windows] = '\r\n';
var StringGen = (function () {
    function StringGen(lineFeed) {
        if (lineFeed === void 0) { lineFeed = constants_1.lineFeedType.unix; }
        this.currentIndent = 0;
        this.strings = [];
        this.eol = false;
        this.lineFeed = dict[lineFeed];
    }
    StringGen.prototype.pushIndent = function (amount) {
        if (amount === void 0) { amount = 1; }
        this.currentIndent += amount;
    };
    StringGen.prototype.popIndent = function (amount) {
        if (amount === void 0) { amount = 1; }
        this.currentIndent -= amount;
        if (this.currentIndent < 0) {
            throw new Error('Indent error.');
        }
    };
    StringGen.prototype.appendLine = function (line) {
        if (line === void 0) { line = ''; }
        if (!line.length) {
            this.appendLineFeed();
            return;
        }
        this.append(line);
        this.appendLineFeed();
    };
    StringGen.prototype.append = function (text) {
        if (this.eol) {
            this.appendIndent();
        }
        this.strings.push(text);
        this.eol = false;
    };
    StringGen.prototype.braces = function (func) {
        this.bracesImpl(func, '}');
    };
    StringGen.prototype.bracesSemicolon = function (func) {
        this.bracesImpl(func, '};');
    };
    StringGen.prototype.toString = function () {
        if (this.currentIndent > 0) {
            throw new Error('indent error');
        }
        return this.strings.join('');
    };
    StringGen.prototype.bracesImpl = function (func, ending) {
        this.append('{');
        this.appendLine();
        this.pushIndent();
        func();
        this.popIndent();
        this.appendLine(ending);
    };
    StringGen.prototype.appendLineFeed = function () {
        this.eol = true;
        this.strings.push(this.lineFeed);
    };
    StringGen.prototype.appendIndent = function () {
        if (this.currentIndent > 0) {
            this.strings.push(createIndent_1.createIndent(this.currentIndent));
        }
    };
    return StringGen;
}());
exports.StringGen = StringGen;
//# sourceMappingURL=StringGen.js.map