const node_helper = require('./node_helper');
const Node = require('./Node');
let rootNode = new Node('root', new Node('left', new Node('left.left')), new Node('right'));

test('test serialization', () => {
  expect(node_helper.serialize(rootNode)).toEqual('root,left,left.left,-1,-1,-1,right,-1,-1');
});

test('test deserialization', () => {
  expect(node_helper.deserialize('root,left,left.left,-1,-1,-1,right,-1,-1').left.left.value).toEqual('left.left');
});

test('test both', () => {
  expect(node_helper.deserialize(node_helper.serialize(rootNode)).left.left.value).toEqual('left.left');
});