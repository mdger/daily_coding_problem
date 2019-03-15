/**
 * @param {Number} a
 * @param {Number} b
 * @returns {function}
 */
function cons(a, b) {
    pair = function(f) {
        return f(a, b);
    }

    return pair;
}

module.exports = cons;