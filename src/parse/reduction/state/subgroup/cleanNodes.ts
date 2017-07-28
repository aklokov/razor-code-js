import { BasicNode } from '../../../../nodes';
import { NodeType } from '../../../../nodes';
import { isEndOfLine, isSuppressableNode, isSuppressingNode } from './nodesFunctions';
import * as _ from 'lodash';

interface ISplitNodes {
    config: BasicNode[];
    content: BasicNode[];
}

function splitNodes(nodes: BasicNode[]): ISplitNodes {
    return {
        config: nodes.filter(node => node.type === NodeType.Config),
        content: nodes.filter(node => node.type !== NodeType.Config)
    };
}

function splitLines(nodes: BasicNode[]): BasicNode[][] {
    let lines = [];
    let line = [];
    nodes.forEach(node => {
        line.push(node);
        if (isEndOfLine(node)) {
            lines.push(line);
            line = [];
        }
    });

    if (line.length) {
        lines.push(line);
    }

    return lines;
}

function cleanLine(line: BasicNode[]): BasicNode[] {
    if (!line.some(node => isSuppressingNode(node))) {
        return line;
    }

    if (line.some(node => !isSuppressableNode(node) && !isSuppressingNode(node))) {
        return line;
    }

    return line.filter(node => isSuppressingNode(node));
}

function cleanContent(nodes: BasicNode[]): BasicNode[] {
    const lines = splitLines(nodes).map(cleanLine);
    return _.flatten(lines);
}

export function cleanNodes(nodes: BasicNode[]): BasicNode[] {
    const split = splitNodes(nodes);

    return [...split.config, ...cleanContent(split.content)];
}
