import { expect } from 'chai';

import { quicksort } from '../../src/data-structures-algorithms/0-2-quick-sort-mean-pivot';
import { Comparer, isSorted, Order, toElementArray } from './sorting-env';

describe(`quick-mean-pivot`, () => {
  [
    [ ],
    [ 1 ],
    [ 3, 2, 1 ],
    [ 2, 2, 1 ],
    [ 3, 4, 2, 1 ],
    [ 0, 9, 1, 8, 2, 7, 3, 6, 4, 5 ],
  ]
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
