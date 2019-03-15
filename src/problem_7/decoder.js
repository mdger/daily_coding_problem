/**
 * @param {String} message
 * @returns {Number}
 */
function decoder(message) {
    const mapping = getMapping();
    let charArray = [...message];
    let countArray = [1, 1];

    for (let i = 2; i <= charArray.length; i++) {
        countArray[i] = 0;

        if (charArray[i - 1] > '0')
            countArray[i] = countArray[i - 1];

        if ((charArray[i - 2] == '1' || charArray[i - 2] == '2') &&
            charArray[i - 1] < '7')
            countArray[i] += countArray[i - 2];
    }

    return countArray.slice().pop();
}

function getMapping() {
    return {
        "a" : 1,
        "b" : 2,
        "c" : 3,
        "d" : 4,
        "e" : 5,
        "f" : 6,
        "g" : 7,
        "h" : 8,
        "i" : 9,
        "j" : 10,
        "k" : 11,
        "l" : 12,
        "m" : 13,
        "n" : 14,
        "o" : 15,
        "p" : 16,
        "q" : 17,
        "r" : 18,
        "s" : 19,
        "t" : 20,
        "u" : 21,
        "v" : 22,
        "w" : 23,
        "x" : 24,
        "y" : 25,
        "z" : 26,
    };
}

module.exports = decoder;