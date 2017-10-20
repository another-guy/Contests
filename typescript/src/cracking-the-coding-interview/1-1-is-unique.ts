export function swap<T>(data: T[], index1: number, index2: number): void {
  const temporary = data[index1];
  data[index1] = data[index2];
  data[index2] = temporary;
}

export function partition<T>(data: T[], low: number, high: number, less: (a: T, b: T) => boolean): number {
  const pivotIndex = high;
  const pivotValue = data[pivotIndex];
  let insertIndex = low - 1;
  for (let index = low; index < high; index++) {
    if (less(data[index], pivotValue)) {
      insertIndex++;
      swap(data, index, insertIndex);
    }
  }
  const newPivotIndex = insertIndex + 1;
  swap(data, pivotIndex, newPivotIndex);
  return newPivotIndex;
}

export function quicksort<T>(data: T[], low: number = 0, high: number = data.length - 1, less: (a: T, b: T) => boolean): void {
  if (low < high) {
    const pivotIndex = partition(data, low, high, less);
    quicksort(data, low, pivotIndex - 1, less);
    quicksort(data, pivotIndex + 1, high, less);
  }
}

export function inPlaceSort<T>(data: T[], less: (a: T, b: T) => boolean): void {
  return quicksort(data, 0, data.length - 1, less);
}

/**
 * Problem: Implement an algorithm to determine if a string has all unique characters.
 *    What if you cannot use additional data structures?
 * Solution:
 *   complexity: O(n log n) -- bound by quicksort
 *   memory: O(n)
 */
function isUnique(word: string): boolean {
  const characters = word.split('');
  inPlaceSort(characters, (a, b) => a < b);

  for (let index = 0; index < characters.length - 1; index++)
    if (characters[index] === characters[index + 1])
      return false;

  return true;
}

// [
//   [ 'a', true ],
//   [ 'ab', true ],
//   [ 'Aa', true ],
//   [ 'aa', false ],
//   [ 'abc', true ],
//   [ 'aba', false ],
//   [ 'abA', true ]
// ]
//   .forEach(testCase => {
//     const [ inputString, expectedResult ] = <[string, boolean]>testCase;
//     const actualResult = isUnique(inputString);
//     if (actualResult === expectedResult) {
//       console.info(inputString, actualResult ? 'unique' : 'not unique');
//     } else {
//       console.error(inputString, actualResult ? 'unique' : 'not unique');
//     }
//   });
