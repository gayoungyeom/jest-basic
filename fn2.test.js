const fn = require('./fn');

let num = 0;

beforeEach(() => {
  num = 0;
});

test('0 더하기 1은 1이야.', () => {
  num = fn.add(num, 1);
  expect(num).toBe(1);
});

test('0 더하기 2은 2이야.', () => {
  num = fn.add(num, 2);
  expect(num).toBe(2);
});

test('0 더하기 3은 3이야.', () => {
  num = fn.add(num, 3);
  expect(num).toBe(3);
});
