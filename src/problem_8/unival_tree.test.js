const Node = require('./Node')
const unival_tree = require('./unival_tree')

test('count unival trees', () => {
    expect(unival_tree(new Node(0, new Node(1), new Node(0, new Node(1, new Node(1), new Node(1)), new Node(0))))).toEqual(5);
})