/** Represents an element in a sortable collection. */
export class Element<TKey> {
  /** The key to sort by. */
  key: TKey;
  /** Some value held by the element, related to the key. */
  value: any;
}

/** Represents an array which elements can be sorted by key. */
export type SortableArray<TKey> = Element<TKey>[];

/** Function to compare two keys. * @returns A negative number if first operand is "less" than the second;
 * 0 if operands are "equal";
 * or a positive number otherwise.
 */
export type Compare<TKey> = (a: Element<TKey>, b: Element<TKey>) => number;

/** Holds available standard comparers. */
export const Comparer = {
  number: (a: Element<number>, b: Element<number>) => a.key - b.key,
  string: (a: Element<string>, b: Element<string>) => a.key.localeCompare(b.key),
};

/** Function that checks whether a certain comparison result (number, <0, 0, >0) is correct for a pair of elements. */
export type OrderCheck = (actual: number) => boolean;

/** Holds available standard orders. */
export const Order = {
    descending: (numbericOrder: number) => numbericOrder > 0,
    nonAscending: (numbericOrder: number) => numbericOrder >= 0,
    ascending: (numbericOrder: number) => numbericOrder < 0,
    nonDescending: (numbericOrder: number) => numbericOrder <= 0,
};

/** Factory function which produces a function that checks whether the comparison result matches the expected order.
 * @param orderChecker Expected order of elements.
 */
export function createOrderChecker<TKey>(orderChecker: OrderCheck) {
  return (
    /** Function to use for element comparison. */
    elementKeysComparer: Compare<TKey>,
  ) => {
    return (
      /** Left element to compare. */
      leftElement: Element<TKey>,
      /** Right element to compare. */
      rightElement: Element<TKey>,
    ): boolean => {
      return orderChecker(elementKeysComparer(leftElement, rightElement));
    };
  };
}

/** Checks whether the sortable array is indeed sorted in the right order.
 * @param result An array which is supposed to be sorted.
 * @param compareKeys A comparator to use when checking whether the order is correct.
 * @param expectedOrder An order in which the array is supposed to be sorted.
 */
export function isSorted<TKey>(
    result: SortableArray<TKey>,
    compareKeys: Compare<TKey>,
    expectedOrder = Order.nonDescending,
): boolean {

  if (result.length === 0) return true;
  if (result.length === 1) return true;

  const areItemsInOrder = createOrderChecker(expectedOrder)(compareKeys);

  for (let elementIndex = 0; elementIndex < result.length - 1; elementIndex++) {
    if (areItemsInOrder(result[elementIndex], result[elementIndex + 1]) === false) return false;
  }

  return true;
}

/**
 * Converts T[] into a SortableArray<T>.
 * @param originalArray Array to translate.
 */
export function toElementArray<T>(originalArray: T[]): SortableArray<T> {
  return originalArray.map(element => ({ key: element, value: ''}));
}

/**
 * Generates a random array.
 * @param elementCount Total number of elements.
 * @param lowInclusive Lowest allowed value of an element.
 * @param highInclusive Highest allowed value of an alement.
 */
export const generateRandomArray =
  (elementCount: number, lowInclusive: number, highInclusive: number) =>
    Array.apply(null, Array(elementCount))
      .map(() => Math.ceil(- (lowInclusive + 1) + Math.random() * (highInclusive - lowInclusive)));

/**
 * Swaps two elements in an array by indices (swapping happens in-place).
 * @param array Array which elements are being swapped.
 * @param index1 Index of first element to swap.
 * @param index2 Index of second element to swap.
 */
export function swap<T>(array: SortableArray<T>, index1: number, index2: number): void {
  const temporary = array[index1];
  array[index1] = array[index2];
  array[index2] = temporary;
}
