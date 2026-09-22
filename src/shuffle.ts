function swap(arr: number[], i: number, j: number): void {
  // biome-ignore lint/style/noNonNullAssertion: caller guarantees i and j are valid indices of arr
  const temp = arr[i]!;
  // biome-ignore lint/style/noNonNullAssertion: caller guarantees i and j are valid indices of arr
  arr[i] = arr[j]!;
  arr[j] = temp;
}

/**
 * Shuffles an array of numbers such that no element ends
 * up at its original index (a random derangement).
 */
export function shuffle(numbers: number[]): number[] {
  const result = [...numbers];

  /** Your code here */

  return result;
}
