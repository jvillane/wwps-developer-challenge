import { describe, expect, it } from 'vitest';
import { shuffle } from './shuffle.js';

describe('shuffleWithoutFixedPoints', () => {
  it('returns an array with the same elements', () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffle(input);
    expect(result).toHaveLength(input.length);
    expect(result.slice().sort()).toEqual(input.slice().sort());
  });

  it('never leaves an element at its original index', () => {
    const input = Array.from({ length: 20 }, (_, i) => i);

    for (let attempt = 0; attempt < 200; attempt++) {
      const result = shuffle(input);
      for (let i = 0; i < input.length; i++) {
        expect(result[i]).not.toBe(input[i]);
      }
    }
  });

  it('does not mutate the original array', () => {
    const input = [1, 2, 3, 4];
    const copy = [...input];
    shuffle(input);
    expect(input).toEqual(copy);
  });

  it('throws for a single-element array', () => {
    expect(() => shuffle([1])).toThrow();
  });

  it('returns an empty array for an empty input', () => {
    expect(shuffle([])).toEqual([]);
  });
});
