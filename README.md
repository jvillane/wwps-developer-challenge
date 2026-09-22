# WWPS Developer Challenge

A small Node.js + TypeScript coding challenge. Your task is to implement a
single function that shuffles an array of numbers under a specific
constraint — see [The Challenge](#the-challenge) below.

## Tech Stack

| Tool                                        | Purpose                          |
| -------------------------------------------- | --------------------------------- |
| [TypeScript](https://www.typescriptlang.org) | Language, with strict type-checking |
| [pnpm](https://pnpm.io)                      | Package manager                   |
| [tsx](https://github.com/privatenumber/tsx)  | Run TypeScript directly (no build step) |
| [Vitest](https://vitest.dev)                 | Test runner                       |
| [Biome](https://biomejs.dev)                 | Linter + formatter                |

## Requirements

- [Node.js](https://nodejs.org) v20 or newer
- [pnpm](https://pnpm.io/installation) (`corepack enable` is the easiest way to get it)

## Getting Started

Install dependencies:

```bash
pnpm install
```

That's it — no build step is required to run the tests.

## The Challenge

Open [`src/shuffle.ts`](src/shuffle.ts). You'll find a function stub:

```ts
export function shuffle(numbers: number[]): number[] {
  const result = [...numbers];

  /** Your code here */

  return result;
}
```

Implement `shuffle` so that it returns the input array in a random order,
**with one extra rule**: whatever value was at index `i` before the shuffle
must **not** end up at index `i` after the shuffle. In other words, produce
a random [derangement](https://en.wikipedia.org/wiki/Derangement) of the
input.

### Requirements

- The result must contain exactly the same elements as the input (just reordered).
- For every index `i`, `result[i] !== numbers[i]`.
- The original array must **not** be mutated.
- An array of length `0` should return `[]` (there's nothing to derange).
- An array of length `1` cannot satisfy the rule — it should throw an error.

### Hints

- A plain [Fisher–Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
  is a great starting point, but on its own it can leave an element in its
  original spot — think about how to rule that out.
- You don't need extra dependencies or randomness libraries; `Math.random()`
  is enough.
- The existing tests in `src/shuffle.test.ts` describe the exact behavior
  expected — read them before you start.

## Available Scripts

| Command             | Description                                  |
| -------------------- | --------------------------------------------- |
| `pnpm test`           | Run the test suite once                       |
| `pnpm test:watch`     | Run tests in watch mode while you code        |
| `pnpm lint`           | Check code style and common issues with Biome |
| `pnpm lint:fix`       | Auto-fix lint issues where possible           |
| `pnpm format`         | Format the codebase with Biome                |
| `pnpm build`          | Type-check and compile to `dist/`             |

## Checking Your Solution

Run the test suite — all tests in `src/shuffle.test.ts` should pass:

```bash
pnpm test
```

Then make sure the linter and type-checker are happy too:

```bash
pnpm lint
pnpm build
```
