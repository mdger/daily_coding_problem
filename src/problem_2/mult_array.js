function mult_array(integers) {
    let result = [];

    for (let exlude = 0; exlude < integers.length; exlude++) {
        let product = 1;
        for (let i = 0; i < integers.length; i++) {
            if (i == exlude)
                continue;
            product *= integers[i];
        }
        result.push(product);
    }
    return result;
}

module.exports = mult_array;