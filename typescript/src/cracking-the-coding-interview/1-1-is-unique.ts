import { quicksort } from '../data-structures-algorithms/0-1-quick-sort-simple';
import { Compare, Comparer, SortableArray, toElementArray } from '../sorting-env';

export function inPlaceSort<T>(data: SortableArray<T>, compare: Compare<T>): void {
  return quicksort(data, 0, data.length - 1, compare);
}

/**
 * Problem: Implement an algorithm to determine if a string has all unique characters.
 *    What if you cannot use additional data structures?
 * Solution:
 *   complexity: O(n log n) -- bound by quicksort
 *   memory: O(n)
 */
export function isUnique(word: string): boolean {
  const characters = toElementArray(word.split(''));
  inPlaceSort(characters, Comparer.string);

  for (let index = 0; index < characters.length - 1; index++) {
    if (characters[index].key === characters[index + 1].key) return false;
  }

  return true;
}
