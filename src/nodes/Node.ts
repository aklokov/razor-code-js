import NodeType from './NodeType';
import * as uuid from 'uuid';

class Node {
    public uuid: string;
    constructor(public type: NodeType) {
        this.uuid = uuid.v1();
    }
}

export default Node;
