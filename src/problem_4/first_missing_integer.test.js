const first_missing_integer = require('./first_missing_integer');

test('first_missing_integer([3, 4, -1, 1])', () => {
    expect(first_missing_integer([3, 4, -1, 1])).toEqual(2);
});

test('first_missing_integer([1, 2, 0])', () => {
    expect(first_missing_integer([1, 2, 0])).toEqual(3)
});

test('first_missing_integer([1, 1, 0, -1, -2])', () => {
    expect(first_missing_integer([1, 1, 0, -1, -2])).toEqual(2)
});

test('first_missing_integer(2, 3, 7, 6, 8, -1, -10, 15])', () => {
    expect(first_missing_integer([2, 3, 7, 6, 8, -1, -10, 15])).toEqual(1)
});

test('first_missing_integer(3, 4, -7, 6, 8, 1, -10, 15])', () => {
    expect(first_missing_integer([2, 3, -7, 6, 8, 1, -10, 15])).toEqual(2)
});