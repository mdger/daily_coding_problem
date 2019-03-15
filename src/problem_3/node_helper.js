const Node = require('./Node');

var exports = module.exports = {};


/**
 * @param {Node} binaryTree
 * @returns {String}
 */
exports.serialize = function(binaryTree) {
    let result = binaryTree.value;
    result += serializeWithRecursion(binaryTree.left);
    result += serializeWithRecursion(binaryTree.right);

    return result;
};

/**
 * @param {String} nodeString
 * @returns {Node}
 */
exports.deserialize = function(nodeString) {
    let nodeArray = nodeString.split(',');
    let result = new Node(nodeArray.shift());

    result.left = deserializeWithRecursion(result.left, nodeArray);
    result.right = deserializeWithRecursion(result.right, nodeArray);

    console.log(result);

    return result;
};

/**
 * @param {Node} rootNode
 * @returns {String}
 */
function serializeWithRecursion(rootNode) {
    let result = ','+rootNode.value;

    result += (rootNode.left != null ? serializeWithRecursion(rootNode.left) : ',-1');
    result += (rootNode.right != null ? serializeWithRecursion(rootNode.right) : ',-1');

    return result;
}

/**
 * @param {Node} node
 * @param {String[]} nodeArray
 * @returns {String}
 */
function deserializeWithRecursion(node, nodeArray) {
    let nodeValue = nodeArray.shift();

    if (nodeValue == '-1')
        return null;

    node = new Node(nodeValue);
    node.left = deserializeWithRecursion(node.left, nodeArray);
    node.right = deserializeWithRecursion(node.right, nodeArray);

    return node;
}