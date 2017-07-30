import { IConfig, Language } from '../config';
import { language as lng, defaultLanguage } from '../../../constants';
import { StringMap } from '../../../tools/dictionary';

const map: StringMap<Language> = {};
map[lng.csharp] = Language.CSharp;
map[lng.javascript] = Language.JavaScript;
map[lng.typescript] = Language.TypeScript;

export function language(config: IConfig, content: string): IConfig {
    return {
        ...config,
        language: map[content] || map[defaultLanguage]
    };
}
