import { IConfig } from '../config';
import { StringGen } from '../common/StringGen';

export function generateEntryFunction(sgen: StringGen, config: IConfig): void {
    sgen.append(`function generate(${config.parameters.join(', ')}): string `);
    sgen.braces(() => generateEntryFunctionContent(sgen, config));
}

function generateEntryFunctionContent(sgen: StringGen, config: IConfig): void {
    sgen.appendLine('const gen = new Gen();');
    let callParms = config.parameters.map(getParameterName).join(', ');
    if (callParms.length) {
        sgen.appendLine(`generateContent(gen, ${callParms});`);
    } else {
        sgen.appendLine('generateContent(gen);');
    }

    sgen.appendLine('return gen.toString();');
}

function getParameterName(parameter: string): string {
    const index = parameter.indexOf(':');
    if (index === -1) {
        return parameter;
    }

    return parameter.substr(0, index).trim();
}
