import { expect } from 'chai';

import { isPalindromePermutation } from '../../src/cracking-the-coding-interview/1-4-palindrome-permutation';

describe(`1-4: IsPalindromePermutation`, () => {
  [
    { text: 'Tact Coa', expectedResult: true },
    { text: null, expectedResult: false },
    { text: '', expectedResult: false },
    { text: 'a', expectedResult: true },
    { text: 'A', expectedResult: true },
    { text: 'aa', expectedResult: true },
    { text: 'aA', expectedResult: true },
    { text: 'ab', expectedResult: false },
    { text: 'Ba', expectedResult: false },
    { text: 'Baa', expectedResult: true },
    { text: 'BaA', expectedResult: true },
    { text: 'Baba', expectedResult: true },
    { text: 'BabA', expectedResult: true },
    { text: 'abcdba', expectedResult: false },
  ].forEach(testCase => {
    const { text, expectedResult } = testCase;

    it(`Should return ${expectedResult} for string '${text}'`, () => {
      expect(isPalindromePermutation(text as string)).to.equal(expectedResult);
    });
  });
});
