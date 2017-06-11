function mergesort<T>(data: T[], less: (a: T, b: T) => boolean): T[] {
  if (data.length < 2)
    return data;
  const medianIndex = Math.floor((data.length - 1) / 2);  
  let left = data.splice(0, medianIndex + 1);
  
  let result = [];
  const leftSorted = mergesort(left, less);
  const rightSorted = mergesort(data, less);
  while (leftSorted.length > 0 && rightSorted.length > 0) {
    if (less(leftSorted[0], rightSorted[0])) {
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

[
  [ [], [] ],
  [ [ 1 ], [ 1 ] ],
  [ [ 3, 2, 1 ], [ 1, 2, 3 ] ],
  [ [ 2, 2, 1 ], [ 1, 2, 2 ] ],
  [ [ 3, 4, 2, 1 ], [ 1, 2, 3, 4 ] ],
  [ [ 1, 0, 2, 9, 3, 8, 4, 7, 5, 6 ], [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ] ]
].forEach(testCase => {
  let [ inputArray, expectedOutput ] = testCase;
  const sortedArray = mergesort(inputArray, (a, b) => a < b);
  console.warn(sortedArray);
});