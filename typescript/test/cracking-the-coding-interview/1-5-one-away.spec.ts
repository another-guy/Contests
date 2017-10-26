import { expect } from 'chai';

import { areOneAway } from '../../src/cracking-the-coding-interview/1-5-one-away';

describe(`1-5: OneAway`, () => {
  [
    { string1: 'pale', string2: 'ple', expectedResult: true },
    { string1: 'pales', string2: 'pale', expectedResult: true },
    { string1: 'pale', string2: 'bale', expectedResult: true },
    { string1: 'pale', string2: 'bake', expectedResult: false },

    { string1: '', string2: '', expectedResult: true },
    { string1: '', string2: ' ', expectedResult: true },
    { string1: ' ', string2: '', expectedResult: true },
    { string1: '', string2: '  ', expectedResult: false },
    { string1: '  ', string2: '', expectedResult: false },
    { string1: '', string2: 'x  ', expectedResult: false },
    { string1: 'x  ', string2: '', expectedResult: false },
    { string1: 'a', string2: 'a', expectedResult: true },

    { string1: 'ab', string2: 'a', expectedResult: true },
    { string1: 'abc', string2: 'a', expectedResult: false },
    { string1: 'abc', string2: 'abc', expectedResult: true },
    { string1: 'a', string2: 'ab', expectedResult: true },
    { string1: 'a', string2: 'abc', expectedResult: false },

    { string1: 'xab', string2: 'xa', expectedResult: true },
    { string1: 'xabc', string2: 'xa', expectedResult: false },
    { string1: 'xabc', string2: 'xabc', expectedResult: true },
    { string1: 'xa', string2: 'xab', expectedResult: true },
    { string1: 'xa', string2: 'xabc', expectedResult: false },
  ].forEach(testCase => {
    const { string1, string2, expectedResult } = testCase;

    it(`Should return ${expectedResult} for '${string1}' and '${string2}'`, () => {
      expect(areOneAway(string1, string2)).to.equal(expectedResult);
    });
  });
});
