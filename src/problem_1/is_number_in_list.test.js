const is_number_in_list = require('./is_number_in_list');

test('is_number_in_list(17, [10, 15, 3, 7])', () => {
  expect(is_number_in_list(17, [10, 15, 3, 7])).toBe(true);
});

test('is_number_in_list(17, [10, 17, 3, 0])', () => {
  expect(is_number_in_list(17, [10, 17, 3, 0])).toBe(true);
});

test('is_number_in_list(17, [10, 20, 2, -3])', () => {
  expect(is_number_in_list(17, [10, 20, 2, -3])).toBe(true);
});

test('is_number_in_list(17, [1, 2, 3, 10])', () => {
  expect(is_number_in_list(17, [1, 2, 3, 10])).toBe(false);
});