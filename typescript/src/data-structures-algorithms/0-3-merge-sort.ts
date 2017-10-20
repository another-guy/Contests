import { Compare, SortableArray } from '../../test/data-structures-algorithms/sorting-env';

export function mergesort<T>(data: SortableArray<T>, compare: Compare<T>): SortableArray<T> {
  if (data.length < 2) return data;
  const medianIndex = Math.floor((data.length - 1) / 2);
  const left = data.splice(0, medianIndex + 1);

  let result = [];
  const leftSorted = mergesort(left, compare);
  const rightSorted = mergesort(data, compare);
  while (leftSorted.length > 0 && rightSorted.length > 0) {
    if (compare(leftSorted[0], rightSorted[0]) < 0) {
      result.push(leftSorted[0]);
      leftSorted.splice(0, 1);
    } else {
      result.push(rightSorted[0]);
      rightSorted.splice(0, 1);
    }
  }

  if (leftSorted.length > 0) {
    result = [ ...result, ...leftSorted ];
  }
  if (rightSorted.length > 0) {
    result = [ ...result, ...rightSorted ];
  }

  return result;
}
