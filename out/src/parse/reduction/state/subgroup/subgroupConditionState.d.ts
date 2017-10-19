import { IState, IGroupState, ISubgroupConditionState, SubgroupOwner } from '../interfaces';
export declare function reduce(current: ISubgroupConditionState, token: string): IState;
export declare function createState(previous: IGroupState, owner: SubgroupOwner): ISubgroupConditionState;
