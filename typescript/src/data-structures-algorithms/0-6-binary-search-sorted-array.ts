export function contains(data: number[], low: number, high: number, element: number): number {
  const subArrayLength = high - low + 1;
  if (subArrayLength < 0)
    throw new Error(`Not supposed to happen. low=${low}, high=${high}`);
  else if (subArrayLength === 1)
    return data[low] === element ? low : -1;
  else if (subArrayLength === 2) {
    if (data[low] === element)
      return low;
    else
      return data[high] === element ? high : -1;
  } else {
    const middleIndex = Math.floor((high + low) / 2);
    if (element <= data[middleIndex]) {
      return contains(data, low, middleIndex, element);
    } else {
      return contains(data, middleIndex, high, element);
    }
  }
}

export const testCase = {
  array: [ 1, 1, 3, 3, 4, 5, 8, 9 ],
  presentElements: [
    { target: 1, index: 0 },
    { target: 3, index: 2 },
    { target: 4, index: 4 },
    { target: 5, index: 5 },
    { target: 8, index: 6 },
    { target: 9, index: 7 }
  ],
  notPresentElements: [
    { target: 2, index: -1 },
    { target: 6, index: -1 },
    { target: 7, index: -1 }
  ]
};
export const testArray = testCase.array;

testCase
  .presentElements
  .forEach(case$ => {
    const actualIndex = contains(testArray, 0, testArray.length - 1, case$.target);
    if (actualIndex === case$.index)
      console.info(`Correct index: ${actualIndex}`);
    else
      console.error(`Expected index ${actualIndex} to be ${case$.index}`);
  });

testCase
  .notPresentElements
  .forEach(case$ => {
    const actualIndex = contains(testArray, 0, testArray.length - 1, case$.target);
    if (actualIndex === case$.index)
      console.info(`Correct index: ${actualIndex}`);
    else
      console.error(`Expected index ${actualIndex} to be ${case$.index}`);
  });