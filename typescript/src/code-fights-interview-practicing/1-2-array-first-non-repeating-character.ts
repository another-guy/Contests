/*
Note: Write a solution with `O(n)` time complexity and `O(1)` additional space complexity, since this is what you would be asked to do during a real interview.

Given a string `s`, find and return the first instance of a non-repeating character in it. If there is no such character, return `'_'`.

Example

For `s = "abacabad"`, the output should be
firstNotRepeatingCharacter(s) = 'c'``.

There are `2` non-repeating characters in the string: `'c'` and `'d'`. Return `c` since it appears in the string first.

For `s = "abacabaabacaba"`, the output should be
`firstNotRepeatingCharacter(s) = '_'`.

There are no characters in this string that do not repeat.
*/

function firstNotRepeatingCharacter(s: string): string {
  const allCharStats = {};
  for (var i = 0; i < s.length; i++) {
      const chr = s[i];
      const charStat = allCharStats[chr];
      allCharStats[chr] = charStat ?
          { index: i, count: charStat.count + 1 } :
          { index: i, count: 1 };
  }
  
  const nonRepeatingOnly = Object
      .getOwnPropertyNames(allCharStats)
      .map(k => { let x = allCharStats[k]; x.chr = k; return x; })
      .filter(charStat => charStat.count === 1);
  
  if (nonRepeatingOnly.length <= 0) return '_';
  
  return nonRepeatingOnly.sort((a, b) => a.index - b.index)[0].chr;
}
