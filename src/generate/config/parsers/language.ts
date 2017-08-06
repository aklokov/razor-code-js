import { IConfig } from '../config';
import { language as lng, lineFeedType } from '../../../constants';

export function language(config: IConfig, content: string): IConfig {
    const newLanguage = content.trim();
    if (newLanguage !== lng.csharp && newLanguage !== lng.javascript && newLanguage !== lng.typescript) {
        return config;
    }

    const lineFeed = newLanguage === lng.csharp ? lineFeedType.windows : lineFeedType.unix;

    return {
        ...config,
        language: newLanguage,
        lineFeed: lineFeed
    };
}
