const mult_array = require('./mult_array');

test('mult_array([1, 2, 3, 4, 5])', () => {
  expect(mult_array([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
});

test('mult_array([3, 2, 1])', () => {
  expect(mult_array([3, 2, 1])).toEqual([2, 3 , 6]);
});