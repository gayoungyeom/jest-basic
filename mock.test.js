const mockFn = jest.fn();

const forEachAdd1 = (arr) => {
  arr.forEach((num) => mockFn(num + 1));
};

mockFn();
mockFn(1);
forEachAdd1([10, 20, 30]);

test('함수는 5번 호출된다', () => {
  expect(mockFn.mock.calls.length).toBe(5);
});

test('2번째로 호출된 함수에 전달된 첫번째 인수는 1이다.', () => {
  expect(mockFn.mock.calls[1][0]).toBe(1);
});

test('forEachAdd1로 전달된 값은 11, 21, 31이다.', () => {
  expect(mockFn.mock.calls[2][0]).toBe(11);
  expect(mockFn.mock.calls[3][0]).toBe(21);
  expect(mockFn.mock.calls[4][0]).toBe(31);
});

//mockFn.mock.results
const mockFn2 = jest.fn((num) => num + 1);
mockFn2(10);
mockFn2(20);
mockFn2(30);
test('함수는 3번 호출된다', () => {
  console.log(mockFn2.mock.results);
  expect(mockFn2.mock.calls.length).toBe(3);
});

//mockResolvedValue
const mockFn3 = jest.fn();
mockFn3.mockResolvedValue({ name: 'Mike' });
test('이름은 Mike', () => {
  mockFn3().then((res) => {
    expect(res.name).toBe('Mike');
  });
});

//유용한 기능
const mockFn4 = jest.fn();
mockFn4(10, 20);
mockFn4();
mockFn4(30, 40);

test('한 번 이상 호출?', () => {
  expect(mockFn4).toBeCalled();
});
test('정확히 세 번 호출?', () => {
  expect(mockFn4).toBeCalledTimes(3);
});
test('10이랑 20 전달받은 함수가 있는가?', () => {
  expect(mockFn4).toBeCalledWith(10, 20);
});
test('마지막 함수는 30이랑 40을 받았는가?', () => {
  expect(mockFn4).lastCalledWith(30, 40);
});
