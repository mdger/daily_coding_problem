class Node {
    /**
     * @param {String} value
     * @param {Node} [left=null]
     * @param {Node} [right=null]
     * @memberof binary_tree
     */
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

module.exports = Node;