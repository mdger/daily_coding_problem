/**
 * Given an array of integers, find the first missing positive
 * integer in linear time and constant space. In other words,
 * find the lowest positive integer that does not exist in the array.
 * The array can contain duplicates and negative numbers as well.
 * @param {Number[]} integers
 * @returns {Boolean}
 */
function first_missing_integer(integers) {
    let start = segregate(integers);
    return findMissingPositiveInteger(integers.slice(start));
}

/**
 * @param {Number[]} integers
 * @returns {Number}
 */
function segregate(integers) {
    let j = 0;
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] <= 0) {
            [integers[j], integers[i]] = [integers[i], integers[j]];
            j++;
        }
    }

    return j;
}

/**
 * @param {Number[]} integers
 * @returns {Number}
 */
function findMissingPositiveInteger(integers) {
    let i;
    let size = integers.length;

    for (i = 0; i < size; i++) {
        let x = integers[i];
        if (x - 1 < size && integers[x - 1] > 0)
            integers[x - 1] = -integers[x - 1];
    }

    for (i = 0; i < size; i++) {
        if (integers[i] > 0)
            return integers[i] + 1;
    }

    return size + 1;
}

module.exports = first_missing_integer;