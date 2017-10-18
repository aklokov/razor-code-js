import { IConfig } from '../../config';
import { StringGen } from '../../common/StringGen';
import { callParms } from '../../tsGen/callParms';

export function generateEntryFunction(sgen: StringGen, config: IConfig): void {
    sgen.append(`function generate(${config.parameters.join(', ')}) `);
    sgen.braces(() => generateEntryFunctionContent(sgen, config));
}

function generateEntryFunctionContent(sgen: StringGen, config: IConfig): void {
    sgen.appendLine('const gen = new Gen();');
    sgen.appendLine(`generateContent(${callParms(config.parameters)});`);
    sgen.appendLine('return gen.toString();');
}
