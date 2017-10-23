import { expect } from 'chai';

import { checkPermutation } from '../../src/cracking-the-coding-interview/1-2-check-permutation';

describe('1-2: IsPermutation', () => {

  [
    { host: 'abracadabra', guest: 'bra', expectedResult: true },
    { host: 'abracadabra', guest: 'braza', expectedResult: false },
    { host: 'abracadabra', guest: 'Bra', expectedResult: true },
    { host: 'abracadabra', guest: 'Braza', expectedResult: false },
  ].forEach(testCase => {
    const { host, guest, expectedResult } = testCase;

    it(`should return ${expectedResult} for host string '${host}' and guest string '${guest}'`, () => {
      expect(checkPermutation(host, guest)).to.equal(expectedResult);
    });

  });
});
