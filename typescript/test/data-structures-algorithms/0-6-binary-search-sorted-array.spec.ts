import { expect } from 'chai';

import { binarySearchForIndex } from '../../src/data-structures-algorithms/0-6-binary-search-sorted-array';

export const testbench = {
  array: [ 1, 1, 1, 3, 3, 4, 5, 8, 9, 9, 10 ],

  presentElementTests: [
    { elementToFind: 1, expectedIndex: 0 },
    { elementToFind: 3, expectedIndex: 3 },
    { elementToFind: 4, expectedIndex: 5 },
    { elementToFind: 5, expectedIndex: 6 },
    { elementToFind: 8, expectedIndex: 7 },
    { elementToFind: 9, expectedIndex: 8 },
    { elementToFind: 10, expectedIndex: 10 },
  ],

  notPresentElementTests: [
    { elementToFind: -1, expectedIndex: -1 },
    { elementToFind: 0, expectedIndex: -1 },
    { elementToFind: 2, expectedIndex: -1 },
    { elementToFind: 6, expectedIndex: -1 },
    { elementToFind: 7, expectedIndex: -1 },
    { elementToFind: 11, expectedIndex: -1 },
  ],
};

describe(`presorted-array-binary-search`, () => {
  const { array, presentElementTests, notPresentElementTests } = testbench;

  presentElementTests
    .concat(notPresentElementTests)
    .forEach(test => {
      const { elementToFind, expectedIndex } = test;

      it(`should return index ${expectedIndex} when searching for ${elementToFind} in ${JSON.stringify(array)}`, () => {
        expect(binarySearchForIndex(array, 0, array.length - 1, elementToFind)).to.equal(expectedIndex);
      });
    });
});
