/**
 * Problem:
 *   Given a string, write a function to check if it is a permutation of a palindrome.
 *   A palindrome is a word or a phrase that is the same forwards and backwards.
 *   A permutation is a rearrangement of letters.
 *   The palindrome does not need to be limited to just dictionary words.
 *
 * Example:
 *   Input: 'Tact Coa'
 *   Output: true (permutations: `taco cat`, `atco cta`, etc.)
 *
 * Solution:
 *   complexity: O(n)
 */
export function isPalindromePermutation(word: string): boolean {
  if (!word) return false;

  const totalCount: { [chr: string]: number } = {};

  word
    .split('')
    .filter(chr => chr !== '')
    .map(chr => chr.toLocaleLowerCase())
    .forEach(chr => totalCount[chr] ? totalCount[chr] += 1 : totalCount[chr] = 1);

  return Object
    .getOwnPropertyNames(totalCount)
    .map(chr => totalCount[chr])
    .filter(chrCount => chrCount % 2 === 1)
    .length < 2;
}
