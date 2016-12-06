import DocumentNode from '../Nodes/DocumentNode';
import IState from './State/IState';

interface IRoot {
    document: DocumentNode;
    state: IState;
}

export default IRoot;
