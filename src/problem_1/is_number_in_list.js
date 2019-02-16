/**
 Good morning! Here's your coding interview problem for today.
 This problem was recently asked by Google.

 Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
 For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

 Bonus: Can you do this in one pass?
*/

function is_number_in_list(k, list) {
    let buffer = [];
    for (const number of list) {
        if (buffer.length > 0) {
            for (const number_buffer of buffer) {
                if (number_buffer + number == k)
                    return true;
            }
        }

        // if (number <= k) needed only if all numbers are positive
            buffer.push(number);
    }

    return false;
}

module.exports = is_number_in_list