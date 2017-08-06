import { StringGen } from './StringGen';
import { IConfig } from '../config';

const generationMark =
    `//------------------------------------------------------------------------------
// <auto-generated>
//  This code was generated from a template.
//
//  Manual changes to this file may cause unexpected behavior in your app.
//  Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------`;

export function startFile(config: IConfig): StringGen {
    const gen = new StringGen(config.lineFeed);
    gen.appendLine(generationMark);
    return gen;
}
