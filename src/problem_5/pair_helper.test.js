const cons = require('./cons');
const pair_helper = require('./pair_helper');

test('car(cons(3, 4)', () => {
    expect(pair_helper.car(cons(3, 4))).toEqual(3);
});

test('cdr(cons(3, 4)', () => {
    expect(pair_helper.cdr(cons(3, 4))).toEqual(4);
});