/**
 * Problem:
 *   Implement a method to perform basic string compression using the counts of repeated characters.
 *   For example, the string aabcccccaaa would become a2b1c5a3.
 *   If the "compressed" string would not become smaller than the original string,
 *   your method should return the original string.
 *   You can assume the string has only uppercase and lowercase letters (a - z).
 *
 * Solution:
 *   complexity: O(n)
 */

export function compressString(text: string): string {
  const compressedText = text
    .split('')
    .reduce((charCounts, char) => {
      const lastGroup = charCounts.length > 0 ? charCounts[charCounts.length - 1] : { char: '', count: -1 };

      if (lastGroup.char !== char) charCounts.push({ char, count: 1 });
      else lastGroup.count += 1;

      return charCounts;
    }, [] as { char: string, count: number }[])
    .reduce((result, group) => result + `${group.char}${group.count}`, '');

  return compressedText.length < text.length ? compressedText : text;
}

export function compressStringImperative(text: string): string {
  let compressedText = '';
  let prevChar = null;
  let previousCharCount = 0;

  for (let charIndex = 0; charIndex < text.length; charIndex++) {
    const currChar = text[charIndex];
    const isLastChar = charIndex === text.length - 1;

    if (isLastChar) {
      if (currChar === prevChar) compressedText += prevChar ? `${prevChar}${previousCharCount + 1}` : '';
      else compressedText += prevChar ? `${prevChar}${previousCharCount}${currChar}1` : `${currChar}1`;
    } else {
      if (currChar === prevChar) previousCharCount++;
      else {
        compressedText += prevChar ? `${prevChar}${previousCharCount}` : '';
        prevChar = currChar;
        previousCharCount = 1;
      }
    }
  }

  return compressedText.length < text.length ? compressedText : text;
}
