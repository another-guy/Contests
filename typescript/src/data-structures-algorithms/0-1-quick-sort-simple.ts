export function swap<T>(data: T[], index1: number, index2: number): void {
  const temporary = data[index1];
  data[index1] = data[index2];
  data[index2] = temporary;
}

export function partition<T>(data: T[], low: number, high: number, less: (a: T, b: T) => boolean): number {
  const originalPivotIndex = high;
  const pivotValue = data[originalPivotIndex];
  let insertionIndex = low - 1;
  for (let index = low; index < high; index++) {
    if (data[index] < pivotValue) {
      insertionIndex++;
      swap(data, index, insertionIndex);
    }
  }
  const newPivotIndex = insertionIndex + 1;
  swap(data, originalPivotIndex, newPivotIndex);
  return newPivotIndex;
}

export function quicksort<T>(data: T[], low: number, high: number, less: (a: T, b: T) => boolean): void {
  if (low < high) {
    const pivotIndex = partition(data, low, high, less);
    quicksort(data, low, pivotIndex - 1, less);
    quicksort(data, pivotIndex + 1, high, less);
  }
}

[
  [ [], [] ],
  [ [ 1 ], [ 1 ] ],
  [ [ 3, 2, 1 ], [ 1, 2, 3 ] ],
  [ [ 2, 2, 1 ], [ 1, 2, 2 ] ],
  [ [ 3, 4, 2, 1 ], [ 1, 2, 3, 4 ] ]
].forEach(testCase => {
  const [ inputArray, expectedOutput ] = testCase;
  quicksort(inputArray, 0, inputArray.length - 1, (a, b) => a < b);
});