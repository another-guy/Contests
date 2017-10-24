import { Compare, SortableArray, swap } from '../sorting-env';

export function quicksort<T>(data: SortableArray<T>, lowIndex: number, highIndex: number, compare: Compare<T>): void {
  if (lowIndex < highIndex) {
    const pivotIndex = partition(data, lowIndex, highIndex, compare);
    quicksort(data, lowIndex, pivotIndex - 1, compare);
    quicksort(data, pivotIndex + 1, highIndex, compare);
  }
}

export function partition<T>(data: SortableArray<T>, lowIndex: number, highIndex: number, compare: Compare<T>): number {
  const originalPivotIndex = highIndex;
  const pivotValue = data[originalPivotIndex];
  let insertionIndex = lowIndex - 1;
  for (let index = lowIndex; index < highIndex; index++) {
    if (compare(data[index], pivotValue) < 0) {
      insertionIndex++;
      swap(data, index, insertionIndex);
    }
  }
  const newPivotIndex = insertionIndex + 1;
  swap(data, originalPivotIndex, newPivotIndex);
  return newPivotIndex;
}
