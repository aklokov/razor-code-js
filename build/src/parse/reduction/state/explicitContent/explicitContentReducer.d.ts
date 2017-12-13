import { IState, IChildState } from '../interfaces';
import { NodeType } from '../../../../nodes';
export declare function reduce(current: IChildState, token: string, closing: string, nodeType: NodeType): IState;
