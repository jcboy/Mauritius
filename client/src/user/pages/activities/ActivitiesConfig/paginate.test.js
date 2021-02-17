const paginate = require('./paginate');

test('arrayContaining', () => {
    const result = [1, 2, 3];
    expect(paginate(2, 4)).toEqual(result);
});

