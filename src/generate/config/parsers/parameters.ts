import { IConfig } from '../config';

function findParameterEnd(content: string, index: number): number {
    let angleBracketCount = 0;
    while (index < content.length) {
        if (content[index] === '<') {
            angleBracketCount++;
        }

        if (content[index] === '>' && angleBracketCount > 0) {
            angleBracketCount--;
        }

        if (content[index] === ',' && angleBracketCount === 0) {
            break;
        }

        index++;
    }
    return index;
}

function parseParameters(content: string): string[] {
    let index = 0;
    const result: string[] = [];
    while (index < content.length) {
        const end = findParameterEnd(content, index);
        const parameter = content.substr(index, end - index).trim();
        if (parameter.length) {
            result.push(parameter);
        }

        index = end + 1;
    }
    return result;
}

export function parameters(config: IConfig, content: string): IConfig {
    return {
        ...config,
        parameters: [...config.parameters, ...parseParameters(content)]
    };
}
