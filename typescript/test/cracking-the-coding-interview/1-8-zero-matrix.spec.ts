import { expect } from 'chai';

import { zeroMatrix } from '../../src/cracking-the-coding-interview/1-8-zero-matrix';

// tslint:disable:prefer-for-of
describe(`1-8: ZeroMatrix`, () => {
  [
    { input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]], expectedResult: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] },
    { input: [[0, 2, 3], [4, 5, 6], [7, 8, 9]], expectedResult: [[0, 0, 0], [0, 5, 6], [0, 8, 9]] },
    { input: [[1, 0, 3], [4, 5, 6], [7, 8, 9]], expectedResult: [[0, 0, 0], [4, 0, 6], [7, 0, 9]] },
    { input: [[1, 0, 3], [0, 5, 6], [7, 8, 9]], expectedResult: [[0, 0, 0], [0, 0, 0], [0, 0, 9]] },
  ].forEach(testCase => {
    const { input, expectedResult } = testCase;

    it(`Should return ${expectedResult} for '${input}'`, () => {
      zeroMatrix(input);

      for (let rowIndex = 0; rowIndex < input.length; rowIndex++) {
        for (let cellIndex = 0; cellIndex < input[rowIndex].length; cellIndex++) {
          expect(input[rowIndex][cellIndex]).to.equal(expectedResult[rowIndex][cellIndex]);
        }
      }
    });
  });
});
