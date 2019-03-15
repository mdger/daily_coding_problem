const Node = require('./Node')

/**
 * @param {Node} node
 * @returns {Number} how many unival subtrees
 */
function unival_tree(node) {
    let result = countRecursion(node)[0];
    return result;
}

/**
 * @param {Node} node
 * @returns {Array} first element is the count, 2nd whether the subtree is universal
 */
function countRecursion(node) {
    if (node == null || node == undefined)
        return [0, true];

    let left_count, is_left_universal, right_count, is_right_universal,
    total_count;

    [left_count, is_left_universal] = countRecursion(node.left);
    [right_count, is_right_universal] = countRecursion(node.right);
    total_count = left_count + right_count;

    if (is_left_universal && is_right_universal) {
        if ((node.left != null && node.value != node.left.value) ||
            node.right != null && node.value != node.right.value) {
            return [total_count, false]
        }

        return [total_count + 1, true]
    }
    return [total_count, false];
}

module.exports = unival_tree;