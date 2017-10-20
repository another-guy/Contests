import { expect } from 'chai';

import { mergesort } from '../../src/data-structures-algorithms/0-3-merge-sort';
import { Comparer, isSorted, Order, toElementArray } from '../../src/sorting-env';
import { testArrays } from './sort-test-arrays';

describe(`quick-mean-pivot`, () => {
  testArrays
  .map(toElementArray)
  .forEach(array => {

    it(`should sort array ${JSON.stringify(array)} correctly.`, () => {
      const arrayToSort = array.slice();

      mergesort(arrayToSort, Comparer.number);

      expect(isSorted(arrayToSort, Comparer.number, Order.nonDescending))
        .to.equal(true, `AFTER SORT: ${JSON.stringify(arrayToSort)}`);
    });

  });
});
