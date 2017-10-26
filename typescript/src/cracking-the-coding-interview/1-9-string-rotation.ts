/**
 * Problem:
 *   Assume you have a method `isSubstring` which checks if one word is a substring of another.
 *   Given two strings, `s1` and `s2`,
 *   write code to check if `s2` is a rotation of `s1` using only one call to `isSubsting`.
 *
 * Example:
 *   waterbottle, erbottlewat   -> true
 *
 * Solution:
 *   complexity: O(n)
 */

const isSubstring = (host: string, guest: string) => host.indexOf(guest) >= 0;

export function isStringRotation(text1: string, text2: string): boolean {
  return isSubstring(text1 + text1, text2);
}
