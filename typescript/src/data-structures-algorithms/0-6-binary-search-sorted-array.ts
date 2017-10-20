export function binarySearchForIndex(data: number[], low: number, high: number, element: number): number {
  const subArrayLength = high - low + 1;

  if (subArrayLength < 0) throw new Error(`Not supposed to happen. low=${low}, high=${high}`);

  else if (subArrayLength === 1) return data[low] === element ? low : -1;

  else if (subArrayLength === 2) {
    return data[low] === element ?
      low :
      (data[high] === element ? high : -1);
  } else {
    const middleIndex = Math.floor((high + low) / 2);
    return element <= data[middleIndex] ?
      binarySearchForIndex(data, low, middleIndex, element) :
      binarySearchForIndex(data, middleIndex, high, element);
  }
}
