const paginate = require('./paginate');

const currentPage = 3;
const pageMax = 5;

const result = [2,3,4];

test(`On page ${currentPage} with pageMax ${pageMax}`, () => {
  expect(paginate(currentPage,pageMax)).toBe(result);
});