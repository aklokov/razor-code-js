import IReduce from '../StateManage/IReduce';
import IRootState from '../State/IRootState';
import IAction from '../StateManage/IAction';



const rootReducer: IReduce<IRootState> = function (prev: IRootState, action: IAction): IRootState {
    prev = prev || {};
    return prev;
};

export default rootReducer;
