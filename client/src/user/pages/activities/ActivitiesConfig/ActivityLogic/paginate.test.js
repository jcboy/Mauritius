//const paginate = require('./paginate');

//const currentPage = 3;
//const pageMax = 5;
const randocall = (fn) => {
return fn(Math.floor(Math.random() * 6 + 1));
}

test('randocall calls its callback with a number', () => {
    const mock = jest.fn();
    randocall(mock);
    expect(mock).toBeCalledWith(expect.any(Number));
});



describe('Beware of a misunderstanding! A sequence of dice rolls', () => {
    const expected = [1, 2, 3, 4, 5, 6];
    it('matches even with an unexpected number 7', () => {
        expect([4, 1, 6, 7, 3, 5, 2, 5, 4, 6]).toEqual(
            expect.arrayContaining(expected),
        );
    });
    it('does not match without an expected number 2', () => {
        expect([4, 1, 6, 7, 3, 5, 7, 5, 4, 6]).not.toEqual(
            expect.arrayContaining(expected),
        );
    });
});


/*
describe('arrayContaining', () => {
    const result = [2, 3, 4];
    it('matches even if received contains additional elements', () => {
        expect(paginate(currentPage,pageMax)).toEqual(expect.arrayContaining(result));
    });
});
 */
