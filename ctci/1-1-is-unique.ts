function inPlaceSort(characters: string[]): string[] {
  return characters.sort();
}

/**
 * Problem: Implement an algorithm to determine if a string has all unique characters.
 *    What if you cannot use additional data structures?
 * Solution:
 *   ...
 */
function isUnique(word: string): boolean {
  const characters = word.split('');
  const sortedCharacters = inPlaceSort(characters);

  for (let index = 0; index < sortedCharacters.length - 1; index++)
    if (sortedCharacters[index] === sortedCharacters[index + 1])
      return false;
  
  return true;
}

[ 'a', 'ab', 'Aa', 'aa', 'abc' ]
  .forEach(inputString => console.warn(inputString, 'isUnique', isUnique(inputString)));