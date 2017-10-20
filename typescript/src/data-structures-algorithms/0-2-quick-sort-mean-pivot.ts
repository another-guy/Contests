import { Compare, SortableArray, swap } from '../sorting-env';

export function partition<T>(data: SortableArray<T>, low: number, high: number, compare: Compare<T>): number {
  const originalPivotIndex = Math.floor((high + low) / 2);

  const pivotValue = data[originalPivotIndex];
  let insertionIndex = low - 1;
  for (let index = low; index <= high; index++) {
    if (index === originalPivotIndex) continue;

    if (compare(data[index], pivotValue) < 0) {
      insertionIndex++;
      swap(data, index, insertionIndex);
    }
  }
  const newPivotIndex = insertionIndex + 1;
  swap(data, originalPivotIndex, newPivotIndex);
  return newPivotIndex;
}

export function quicksort<T>(data: SortableArray<T>, low: number, high: number, compare: Compare<T>): void {
  if (low < high) {
    const pivotIndex = partition(data, low, high, compare);
    quicksort(data, low, pivotIndex - 1, compare);
    quicksort(data, pivotIndex + 1, high, compare);
  }
}
