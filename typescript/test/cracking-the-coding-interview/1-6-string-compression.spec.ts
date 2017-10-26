import { expect } from 'chai';

import { compressString } from '../../src/cracking-the-coding-interview/1-6-string-compression';

describe(`1-6: StringCompression`, () => {
  [
    { text: 'aabcccccaaa', expectedResult: 'a2b1c5a3' },
    { text: 'aa', expectedResult: 'aa' },
    { text: 'aaa', expectedResult: 'a3' },
    { text: 'aab', expectedResult: 'aab' },
    { text: 'abc', expectedResult: 'abc' },
    { text: 'aaabb', expectedResult: 'a3b2' },
    { text: 'aaaabbc', expectedResult: 'a4b2c1' },
    { text: 'aaabbaa', expectedResult: 'a3b2a2' },
  ].forEach(testCase => {
    const { text, expectedResult } = testCase;

    it(`Should return ${expectedResult} for '${text}'`, () => {
      expect(compressString(text)).to.equal(expectedResult);
    });
  });
});
