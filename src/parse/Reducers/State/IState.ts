import Node from '../../Nodes/Node';

interface IState {
    name: string;
    previous?: IState;
    nodes: Node[];
}

export default IState;
