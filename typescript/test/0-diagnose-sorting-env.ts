import { expect } from 'chai';

import { Compare, Comparer, createOrderChecker, Element, isSorted, Order, OrderCheck } from './sorting-env';

describe('Comparer.number', () => {
  [
    { key1: -2, key2: -1, expectedResult: -1 },
    { key1: -2, key2: 0, expectedResult: -2 },
    { key1: -2, key2: -2, expectedResult: 0 },
    { key1: -2, key2: 1, expectedResult: -3 },
    { key1: 0, key2: -1, expectedResult: 1 },
    { key1: 0, key2: -2, expectedResult: 2 },
    { key1: 2, key2: 1, expectedResult: 1 },
    { key1: 1, key2: 1, expectedResult: 0 },
    { key1: 2, key2: 2, expectedResult: 0 },
    { key1: 0, key2: 0, expectedResult: 0 },
  ].forEach(testCase => {
    const { key1, key2, expectedResult } = testCase;

    it(`produces ${expectedResult} when compares (${key1}, ${key2})`, () => {
      const actual = Comparer.number({ key: key1, value: '' }, { key: key2, value: '' });
      expect(actual).to.equal(expectedResult);
    });

  });
});

describe('Comparer.string', () => {
  [
    { key1: 'a', key2: 'b', expectedResult: -1 },
    { key1: 'a', key2: 'c', expectedResult: -1 },
    { key1: 'a', key2: 'a', expectedResult: 0 },
    { key1: 'a', key2: 'd', expectedResult: -1 },
    { key1: 'c', key2: 'b', expectedResult: 1 },
    { key1: 'c', key2: 'a', expectedResult: 1 },
    { key1: 'e', key2: 'd', expectedResult: 1 },
    { key1: 'd', key2: 'd', expectedResult: 0 },
    { key1: 'e', key2: 'e', expectedResult: 0 },
    { key1: 'c', key2: 'c', expectedResult: 0 },
  ].forEach(testCase => {
    const { key1, key2, expectedResult } = testCase;

    it(`produces ${expectedResult} when compares (${key1}, ${key2})`, () => {
      const actual = Comparer.string({ key: key1, value: '' }, { key: key2, value: '' });
      expect(actual).to.equal(expectedResult);
    });

  });
});

describe('Order.ascending', () => {
  [
    { numericOrder: -5, expectedResult: true },
    { numericOrder: -1, expectedResult: true },
    { numericOrder: 0, expectedResult: false },
    { numericOrder: 1, expectedResult: false },
    { numericOrder: 5, expectedResult: false },
  ].forEach(testCase => {
    const { numericOrder, expectedResult } = testCase;
    it(``, () => {
      const actual = Order.ascending(numericOrder);
      expect(actual).to.equal(expectedResult);
    });
  });
});

describe('Order.nonDescending', () => {
  [
    { numericOrder: -5, expectedResult: true },
    { numericOrder: -1, expectedResult: true },
    { numericOrder: 0, expectedResult: true },
    { numericOrder: 1, expectedResult: false },
    { numericOrder: 5, expectedResult: false },
  ].forEach(testCase => {
    const { numericOrder, expectedResult } = testCase;
    it(``, () => {
      const actual = Order.nonDescending(numericOrder);
      expect(actual).to.equal(expectedResult);
    });
  });
});

describe('Order.descending', () => {
  [
    { numericOrder: -5, expectedResult: false },
    { numericOrder: -1, expectedResult: false },
    { numericOrder: 0, expectedResult: false },
    { numericOrder: 1, expectedResult: true },
    { numericOrder: 5, expectedResult: true },
  ].forEach(testCase => {
    const { numericOrder, expectedResult } = testCase;
    it(``, () => {
      const actual = Order.descending(numericOrder);
      expect(actual).to.equal(expectedResult);
    });
  });
});

describe('Order.nonAscending', () => {
  [
    { numericOrder: -5, expectedResult: false },
    { numericOrder: -1, expectedResult: false },
    { numericOrder: 0, expectedResult: true },
    { numericOrder: 1, expectedResult: true },
    { numericOrder: 5, expectedResult: true },
  ].forEach(testCase => {
    const { numericOrder, expectedResult } = testCase;
    it(``, () => {
      const actual = Order.nonAscending(numericOrder);
      expect(actual).to.equal(expectedResult);
    });
  });
});

describe('createOrderChecker', () => {
  it('passes a smoke test', () => {
    const a = { key: 'a', value: '' };
    const b = { key: 'b', value: '' };

    const fakeOrderChecker = (_: number): boolean => _ === 42;
    const fakeElementKeysComparer =
      (element1: Element<string>, element2: Element<string>): number =>
        element1 === a && element2 === b ? 42 : 0;
    const check = createOrderChecker(fakeOrderChecker)(fakeElementKeysComparer);

    expect(check(a, b)).to.equal(true);
  });
});

describe('isSorted', () => {
  // ...
  const toElementArray =
    (originalArray: number[]): Element<number>[] =>
      originalArray.map(numericKey => ({ key: numericKey, value: ''}));

  const ascending = toElementArray([-2, -1, 0, 1, 2]);
  const nonDescending = toElementArray([-2, -2, -1, -1, 0, 0, 1, 1, 2, 2]);
  const descending = ascending.slice().reverse();
  const nonAscending = nonDescending.slice().reverse();
  const singleElement = [ascending[0]];
  const empty: Element<number>[] = [];

  [
    { array: ascending, order: Order.ascending, expectedResult: true },
    { array: ascending, order: Order.nonDescending, expectedResult: true },
    { array: ascending, order: Order.descending, expectedResult: false },
    { array: ascending, order: Order.nonAscending, expectedResult: false },

    { array: nonDescending, order: Order.ascending, expectedResult: false },
    { array: nonDescending, order: Order.nonDescending, expectedResult: true },
    { array: nonDescending, order: Order.descending, expectedResult: false },
    { array: nonDescending, order: Order.nonAscending, expectedResult: false },

    { array: descending, order: Order.ascending, expectedResult: false },
    { array: descending, order: Order.nonDescending, expectedResult: false },
    { array: descending, order: Order.descending, expectedResult: true },
    { array: descending, order: Order.nonAscending, expectedResult: true },

    { array: nonAscending, order: Order.ascending, expectedResult: false },
    { array: nonAscending, order: Order.nonDescending, expectedResult: false },
    { array: nonAscending, order: Order.descending, expectedResult: false },
    { array: nonAscending, order: Order.nonAscending, expectedResult: true },

    { array: singleElement, order: Order.ascending, expectedResult: true },
    { array: singleElement, order: Order.nonDescending, expectedResult: true },
    { array: singleElement, order: Order.descending, expectedResult: true },
    { array: singleElement, order: Order.nonAscending, expectedResult: true },

    { array: empty, order: Order.ascending, expectedResult: true },
    { array: empty, order: Order.nonDescending, expectedResult: true },
    { array: empty, order: Order.descending, expectedResult: true },
    { array: empty, order: Order.nonAscending, expectedResult: true },
  ].forEach(testCase => {
    const { array, order, expectedResult } = testCase;
    it (`passes end-to-end tests`, () => {
      expect(isSorted(array, Comparer.number, order)).to.equal(expectedResult);
    });
  });
});
