// app.test.js
describe('Basic Test Suite', () => {
  test('should pass basic math test', () => {
    expect(1 + 1).toBe(2);
  });
  
  test('should check string contains', () => {
    expect('hello world').toContain('world');
  });
  
  test('should check array includes', () => {
    const fruits = ['apple', 'banana', 'orange'];
    expect(fruits).toContain('banana');
  });
});