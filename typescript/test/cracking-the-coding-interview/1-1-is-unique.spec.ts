import { expect } from 'chai';

import { isUnique } from '../../src/cracking-the-coding-interview/1-1-is-unique';

describe(`1-1: IsUnique`, () => {
  [
    { inputString: 'a', expectedResult: true },
    { inputString: 'ab', expectedResult: true },
    { inputString: 'Aa', expectedResult: true },
    { inputString: 'aa', expectedResult: false },
    { inputString: 'abc', expectedResult: true },
    { inputString: 'aba', expectedResult: false },
    { inputString: 'abA', expectedResult: true },
  ].forEach(testCase => {
    const { inputString, expectedResult } = testCase;

    it(`isUnique('${inputString}') should return ${expectedResult}`, () => {

      expect(isUnique(inputString)).to.equal(expectedResult);

    });

  });
});
