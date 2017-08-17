import { IState } from './reduction/state/interfaces';
import { RootNode } from '../nodes';
export default function parseImpl(reducer: (c: IState, t: string) => IState, source: string): RootNode;
