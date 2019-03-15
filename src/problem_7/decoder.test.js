const decoder = require('./decoder')

test('decoder function', () => {
    expect(decoder('111')).toEqual(3);
    expect(decoder('123')).toEqual(3);
    expect(decoder('263')).toEqual(2);
    /*
        26, 22
        2, 6, 22
        2, 6, 2, 2
        26, 2, 2
    */
    expect(decoder('2622')).toEqual(4);
    expect(decoder('')).toEqual(1);
});