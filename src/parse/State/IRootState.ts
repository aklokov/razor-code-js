import DocumentNode from '../Nodes/DocumentNode';
import IState from './IState';

interface IRootState {
    document: DocumentNode;
    current: IState;
}

export default IRootState;
