import { expect } from 'chai';
import { isStringRotation } from '../../src/cracking-the-coding-interview/1-9-string-rotation';

describe(`1-9: StringRotation`, () => {
  [
    { s1: 'erbottlewat', s2: 'waterbottle', expectedResult: true },
    { s1: '', s2: 'waterbottle', expectedResult: false },
    { s1: 'waterbottlz', s2: 'waterbottle', expectedResult: false },
    { s1: 'zwaterbottl', s2: 'waterbottle', expectedResult: false },
  ].forEach(testCase => {
    const { s1, s2, expectedResult } = testCase;

    it(`Should return ${expectedResult} for s1='${s1}, s2=${s2}'`, () => {
      expect(isStringRotation(s1, s2)).to.equal(expectedResult);
    });
  });
});
