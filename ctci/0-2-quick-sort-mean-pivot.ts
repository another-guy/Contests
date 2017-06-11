function swap<T>(data: T[], index1: number, index2: number): void {
  const temporary = data[index1];
  data[index1] = data[index2];
  data[index2] = temporary;
}

function partition<T>(data: T[], low: number, high: number, less: (a: T, b: T) => boolean): number {
  const originalPivotIndex = Math.floor((high + low) / 2);
  console.warn(low, high, '->', originalPivotIndex);

  const pivotValue = data[originalPivotIndex];
  let insertionIndex = low - 1;
  for (let index = low; index <= high; index++) {
    if (index === originalPivotIndex)
      continue;
    if (data[index] < pivotValue) {
      insertionIndex++;
      swap(data, index, insertionIndex);
    }
  }
  const newPivotIndex = insertionIndex + 1;
  swap(data, originalPivotIndex, newPivotIndex);
  return newPivotIndex;
}

function quicksort<T>(data: T[], low: number, high: number, less: (a: T, b: T) => boolean): void {
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
  [ [ 3, 4, 2, 1 ], [ 1, 2, 3, 4 ] ],
  [ [ 0, 9, 1, 8, 2, 7, 3, 6, 4, 5 ], [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ] ]
].forEach(testCase => {
  const [ inputArray, expectedOutput ] = testCase;
  quicksort(inputArray, 0, inputArray.length - 1, (a, b) => a < b);

  console.warn(inputArray, expectedOutput);
});