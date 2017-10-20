import { expect } from 'chai';

import { quicksort } from '../../src/data-structures-algorithms/0-2-quick-sort-mean-pivot';
import { Comparer, isSorted, Order, toElementArray } from '../../src/sorting-env';
import { testArrays } from './sort-test-arrays';

describe(`quick-mean-pivot`, () => {
  testArrays
  .map(toElementArray)
  .forEach(array => {

    it(`should sort array ${JSON.stringify(array)} correctly.`, () => {
      const arrayToSort = array.slice();

      quicksort(arrayToSort, 0, arrayToSort.length - 1, Comparer.number);

      expect(isSorted(arrayToSort, Comparer.number, Order.nonDescending))
        .to.equal(true, `AFTER SORT: ${JSON.stringify(arrayToSort)}`);
    });

  });
});
