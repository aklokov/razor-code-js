import { NodeType, BasicNode } from '../../../src/nodes';
import * as nodes from '../../../src/nodes';
import { expect } from 'chai';

function expectNodeType(node: BasicNode, type: NodeType): void {
  expect(node.type).to.be.equal(type);
}

export function root(node: nodes.RootNode, childrenCount?: number): void {
  expectNodeType(node, NodeType.Root);
  if (childrenCount) {
    expect(node.children.length).to.be.equal(childrenCount, 'child count in root node is not as expected');
  }
}

export function config(node: BasicNode, token: string, content: string): void {
  expectNodeType(node, NodeType.Config);
  const configNode = node as nodes.ConfigNode;
  expect(configNode.token).to.be.equal(token);
  expect(configNode.content).to.be.equal(content);
}

function contentNode(node: BasicNode, content: string, type: NodeType): void {
  expectNodeType(node, type);
  const contentNode = node as nodes.ContentNode;
  expect(contentNode.content).to.be.equal(content);
}

export function comment(node: BasicNode, content: string): void {
  contentNode(node, content, NodeType.Comment);
}

export function literal(node: BasicNode, content: string): void {
  contentNode(node, content, NodeType.Literal);
}

export function expression(node: BasicNode, content: string): void {
  contentNode(node, content, NodeType.Expression);
}

export function injection(node: BasicNode, content: string): void {
  contentNode(node, content, NodeType.Injection);
}

export function eol(node: BasicNode): void {
  expectNodeType(node, NodeType.Eol);
}

export function forceEol(node: BasicNode): void {
  expectNodeType(node, NodeType.ForceEol);
}

export function rootWithoutConfig(node: nodes.RootNode): void {
  const haveConfigNode = node.children.some(node => node.type === NodeType.Config);
  expect(haveConfigNode).to.be.equal(false, 'config node should not be present');
}

export function forEach(node: BasicNode, condition: string, childCount?: number): nodes.ForEachNode {
  expectNodeType(node, NodeType.ForEach);
  const forEachNode = node as nodes.ForEachNode;
  expect(forEachNode.condition).to.be.equal(condition);
  if (childCount) {
    expect(forEachNode.children.length).to.be.equal(childCount, 'child count in forEach node is not as expected');
  }
  return forEachNode;
}

export function ifNode(node: BasicNode, condition: string): nodes.IfNode {
  expectNodeType(node, NodeType.If);
  const ifNode = node as nodes.IfNode;
  expect(ifNode.condition).to.be.equal(condition);
  return ifNode;
}

export function ifChildren(node: nodes.IfNode, ifCount: number, elseCount: number = 0): void {
  expect(node.ifChildren.length).to.be.equal(ifCount, 'if node children count is not as expected');
  expect(node.elseChildren.length).to.be.equal(elseCount, 'if node children else count is not as expected');
}

export function partial(node: BasicNode, generatorName: string, parameters: string, indent: string): void {
  expectNodeType(node, NodeType.Partial);
  const partialNode = node as nodes.PartialNode;
  expect(partialNode.generatorName).to.be.equal(generatorName);
  expect(partialNode.parameters).to.be.equal(parameters);
  expect(partialNode.indent).to.be.equal(indent);
}
