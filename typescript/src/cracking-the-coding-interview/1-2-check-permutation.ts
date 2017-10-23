export function normalize(word: string): string {
  return word ? word.toLowerCase() : '';
}

export function charCount(word: string): { [_: string]: number } {
  return word
    .split('')
    .reduce((result, char) => {
      result[char] = result[char] ? result[char] + 1 : 1;

      return result;
    }, {} as { [_: string]: number });
}

export function charCountDoesNotExceed(
  hostCharCount: { [_: string]: number },
  guestCharCount: { [_: string]: number },
): boolean {
  return Object
    .keys(guestCharCount)
    .every(char => hostCharCount[char] >= guestCharCount[char]);
}

/**
 * Problem: Given two strings, write a method to decide whether one is the permutation of another.
 * Solution:
 *   complexity: O(n)
 *   memory: O(k + m), where k and m are respectively counts of unique characters in each input word.
 */
export function checkPermutation(hostWord: string, guestWord: string): boolean {
  return charCountDoesNotExceed(
    charCount(normalize(hostWord)),
    charCount(normalize(guestWord)),
  );
}
