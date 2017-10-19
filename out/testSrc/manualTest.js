"use strict";
exports.__esModule = true;
var src_1 = require("../src");
var template = "\n@language ts\n@linefeed unix\n@import * as IType from './IType;\n@parameters obj: IType\n@exportname rootGen\n\nexport class @obj.className {\n    public @(obj.functionName)(): void {\n@{let i = 5;}\n@if(i > 5){\n    @foreach(let world in obj.worlds){\n        console.log('hello, world ' + @world.name);\n    }\n}\n\n@if(i < 5){\n @[some(thing)]\n} else {\n    return @i;\n}\n    }\n}\n";
describe('manualTest', function () {
    it('should not throw', function () {
        var result = src_1.generate(template);
        console.log('result: ');
        console.log(result);
    });
});
//# sourceMappingURL=manualTest.js.map