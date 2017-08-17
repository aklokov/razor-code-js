import { IState } from './interfaces';
import { BasicNode } from '../../../nodes';
export declare function reduce(current: IState, token: string): IState;
export declare function createState(nodes: BasicNode[]): IState;
