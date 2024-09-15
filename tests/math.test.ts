import { add, subtract } from '../src/math';

describe('Math functions', () => {
  test('should add two numbers correctly', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('should subtract two numbers correctly', () => {
    expect(subtract(5, 3)).toBe(2);
  });
});
