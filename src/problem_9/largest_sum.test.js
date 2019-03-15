const largest_sum = require('./largest_sum')

test('largest_sum', () => {
    expect(largest_sum([2, 4, 6, 2, 5])).toEqual(13);
    expect(largest_sum([5, 1, 1, 5])).toEqual(10);
    expect(largest_sum([5, 1])).toEqual(5);
})