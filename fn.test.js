const fn = require('./fn');

/* 1. 기초 테스트 */

test('1은 1이야.', () => {
  expect(1).toBe(1);
});

test('2 더하기 3은 5야.', () => {
  expect(fn.add(2, 3)).toBe(5);
});

test('3 더하기 3은 5가 아니야.', () => {
  expect(fn.add(3, 3)).not.toBe(5);
});

/* 2. Matchers 알아보기 */

// 비교 - toBe, toEqual, toStrictEqual
test('2 더하기 3은 5야.', () => {
  expect(fn.add(2, 3)).toEqual(5);
});

test('이름과 나이를 전달받아서 객체를 반환해줘.(toBe)', () => {
  expect(fn.makeUser('Mike', 30)).toBe({
    name: 'Mike',
    age: 30,
  });
});

test('이름과 나이를 전달받아서 객체를 반환해줘.(toEqual)', () => {
  expect(fn.makeUser('Mike', 30)).toEqual({
    name: 'Mike',
    age: 30,
  });
});

test('이름과 나이를 전달받아서 객체를 반환해줘.(toStrictEqual)', () => {
  expect(fn.makeUser('Mike', 30)).toStrictEqual({
    name: 'Mike',
    age: 30,
  });
});

// 없음 - toBeNull, toBeUndefined, toBeDefined
test('null은 null이야.', () => {
  expect(null).toBeNull();
});

test('undefined는 undefined이야.', () => {
  expect(undefined).toBeUndefined();
});

test('something는 undefined가 아니야.', () => {
  expect('something').toBeDefined();
});

// Boolean - toBeTruthy, toBeFalsy
test('0은 false야.', () => {
  expect(fn.add(1, -1)).toBeFalsy();
});

test('비어있지 않은 문자열은 true야.', () => {
  expect(fn.add('hello', 'world')).toBeTruthy();
});

//숫자 다루기 - toBeGreaterThan, toBeGreaterThanOrEqual, toBeLessThan, toBeLessThanOrEqual, toBeCloseTo
test('ID는 10자 이하여야 한다.', () => {
  const id = 'THE_BLACK_ORDER';
  expect(id.length).toBeLessThan(10);
});

test('0.1 더하기 0.2는 0.3이야.', () => {
  expect(fn.add(0.1, 0.2)).toBe(0.3);
});

test('0.1 더하기 0.2는 0.3이야.', () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

//문자 다루기 - toMatch
test('Hello World에 e라는 글자가 있나?', () => {
  expect('Hello World').toMatch(/e/);
});

test('유저 리스트에 Mike가 있나?', () => {
  const user = 'Mike';
  const userList = ['Tom', 'Jane', 'Mike'];
  expect(userList).toContain(user);
});

//에러 다루기 - toThrow
test('에러 발생하나?', () => {
  expect(() => fn.throwErr()).toThrow();
});

test('xx에러 발생하나?', () => {
  expect(() => fn.throwErr()).toThrow('xx');
});

/**
 * 3. 비동기 테스트
 */

test('3초 후에 받아온 이름은 Mike이다.', (done) => {
  const callback = (name) => {
    expect(name).toBe('Mike');
    done();
  };
  fn.getName(callback);
});

test('3초 후에 받아온 나이는 30이다.', () => {
  return fn.getAge().then((age) => {
    expect(age).toBe(30);
  });
});

test('3초 후에 받아온 나이는 30이다.', () => {
  return expect(fn.getAge()).resolves.toBe(30);
});

test('3초 후에 받아온 나이는 30이다.', async () => {
  expect(await fn.getAge()).toBe(30);
});

test('3초 후에 받아온 나이는 30이다.', async () => {
  await expect(fn.getAge()).resolves.toBe(30);
});
