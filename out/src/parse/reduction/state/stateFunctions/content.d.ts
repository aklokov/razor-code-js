import { IGroupState, IStateWithContent } from '../interfaces';
export declare function afterForceEol(current: IGroupState): boolean;
export declare function nodeHasContent(node: IGroupState): boolean;
export declare function getContent(current: IStateWithContent): string;
export declare function addToken(current: IStateWithContent, ...tokens: string[]): IStateWithContent;
export declare function tryAddLiteralNode(current: IGroupState): IGroupState;
export declare function forceAddContent(current: IGroupState): IGroupState;
