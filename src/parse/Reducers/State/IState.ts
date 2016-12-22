import Node from '../../Nodes/Node';

interface IState {
    name: string;
    previous?: IState;
}

export default IState;
