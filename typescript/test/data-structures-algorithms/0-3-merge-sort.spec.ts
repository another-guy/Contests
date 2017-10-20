import { expect } from 'chai';

import { mergesort } from '../../src/data-structures-algorithms/0-3-merge-sort';
import { Comparer, isSorted, Order, toElementArray } from './sorting-env';

describe(`quick-mean-pivot`, () => {
  [
    [],
    [ 1 ],
    [ 3, 2, 1 ],
    [ 2, 2, 1 ],
    [ 3, 4, 2, 1 ],
    [ 1, 0, 2, 9, 3, 8, 4, 7, 5, 6 ],
  ]
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
