const db = require('./db');

let user;

beforeAll(async () => {
  user = await db.connectUserDb();
});

afterAll(async () => {
  await db.disconnectDb();
});

test('이름은 Mike', () => {
  expect(user.name).toBe('Mike');
});

test('나이는 30', () => {
  expect(user.age).toBe(30);
});

test('성별은 남성', () => {
  expect(user.gender).toBe('male');
});
