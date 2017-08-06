import { IConfig } from '../config';
import { lineFeedType as lft } from '../../../constants';

export function lineFeedType(config: IConfig, content: string): IConfig {
    let newLft = content.trim();
    if (newLft !== lft.windows && newLft !== lft.unix && newLft !== lft.mac) {
        return config;
    }

    return {
        ...config,
        lineFeed: newLft
    };
}
