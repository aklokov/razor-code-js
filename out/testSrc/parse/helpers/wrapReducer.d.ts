import { IState } from '../../../src/parse/reduction/state/interfaces';
declare function wrapReducer(reducer: (c: IState, t: string) => IState): (c: IState, t: string) => IState;
export default wrapReducer;
