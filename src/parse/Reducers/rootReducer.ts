import IRootState from '../State/IRootState';
import { IAction, IReduce } from '../StateManage/interfaces';
import * as states from '../State/states';

const rootReducer: IReduce<IRootState> = function (prev: IRootState, action: IAction): IRootState {
    prev = prev || { document: undefined, current: {state: states.initial} };
    switch()
    return prev;
};

export default rootReducer;
