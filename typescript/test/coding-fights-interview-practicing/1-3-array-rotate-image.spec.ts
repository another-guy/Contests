import { expect } from 'chai';

import {
  get,
  rotateImage,
  set,
  startPointIterator,
} from '../../src/code-fights-interview-practicing/1-3-array-rotate-image';

describe(rotateImage.name, () => {
  [
    {
      original: [[]],
      expectedResult: [[]],
    },
    {
      original: [[1]],
      expectedResult: [[1]],
    },
    {
      original: [
        [1, 2],
        [3, 4],
      ],
      expectedResult: [
        [3, 1],
        [4, 2],
      ],
    },
    {
      original: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      expectedResult: [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
      ],
    },
    {
      original: [
        [ 1,  2,  3,  4,  5,  6],
        [ 7,  8,  9, 10, 11, 12],
        [13, 14, 15, 16, 17, 18],
        [19, 20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35, 36],
      ],
      expectedResult: [
        [31, 25, 19, 13,  7, 1],
        [32, 26, 20, 14,  8, 2],
        [33, 27, 21, 15,  9, 3],
        [34, 28, 22, 16, 10, 4],
        [35, 29, 23, 17, 11, 5],
        [36, 30, 24, 18, 12, 6],
      ],
    },
  ].forEach(testCase => {
    const { original, expectedResult } = testCase;
    it (`Should produce ${JSON.stringify(expectedResult)} for ${JSON.stringify(original)}`, () => {
      const actual = rotateImage(original);
      expect(JSON.stringify(actual)).to.equal(JSON.stringify(expectedResult), `\n${JSON.stringify(actual)}`);
    });
  });
});

describe(startPointIterator.name, () => {
  [
    // tslint:disable:max-line-length
    { dimension: 0, expectedResult: [] },
    { dimension: 1, expectedResult: [] },
    { dimension: 2, expectedResult: [{ r: 0, c: 0 } ]},
    { dimension: 3, expectedResult: [{ r: 0, c: 0 }, { r: 0, c: 1 } ]},
    { dimension: 4, expectedResult: [{ r: 0, c: 0 }, { r: 0, c: 1 }, { r: 0, c : 2 }, { r: 1, c: 1 } ]},
    { dimension: 5, expectedResult: [{ r: 0, c: 0 }, { r: 0, c: 1 }, { r: 0, c : 2 }, { r: 0, c: 3 }, { r: 1, c: 1 }, { r: 1, c: 2 } ]},
    { dimension: 6, expectedResult: [{ r: 0, c: 0 }, { r: 0, c: 1 }, { r: 0, c : 2 }, { r: 0, c: 3 }, { r: 0, c: 4 }, { r: 1, c: 1 }, { r: 1, c: 2 }, { r: 1, c: 3 }, { r: 2, c: 2 } ]},
    // tslint:enable:max-line-length
  ].forEach(testCase => {
    const { dimension, expectedResult } = testCase;
    it(`Should produce ${JSON.stringify(expectedResult)} for ${dimension}`, () => {
      const actualPoints = [...startPointIterator(dimension)];
      expect(actualPoints).deep.equal(expectedResult);
    });
  });
});

describe(get.name, () => {
  [
    {
      image: [[42]],
      pointList: [
        { point: { r: 0, c: 0 }, expectedResult: 42 },
      ],
    },
    {
      image: [[1, 2], [3, 4]],
      pointList: [
        { point: { r: 0, c: 0 }, expectedResult: 1 },
        { point: { r: 0, c: 1 }, expectedResult: 2 },
        { point: { r: 1, c: 0 }, expectedResult: 3 },
        { point: { r: 1, c: 1 }, expectedResult: 4 },
      ],
    },
  ].forEach(testCase => {
    const { image, pointList } = testCase;
    pointList.forEach(item => {
      const { point, expectedResult } = item;
      it(
        `Should return ${expectedResult} when accessing ${JSON.stringify(point)} on image ${JSON.stringify(image)}`,
        () => {
          expect(get(image, point)).to.equal(expectedResult);
        },
      );
    });
  });
});

describe(set.name, () => {
  [
    {
      image: [[0]],
      pointList: [
        { point: { r: 0, c: 0 }, value: 42 },
      ],
    },
    {
      image: [[0, 0], [0, 0]],
      pointList: [
        { point: { r: 0, c: 0 }, value: 42 },
        { point: { r: 0, c: 1 }, value: 42 },
        { point: { r: 1, c: 0 }, value: 42 },
        { point: { r: 1, c: 1 }, value: 42 },
      ],
    },
  ].forEach(testCase => {
    const { image, pointList } = testCase;
    pointList.forEach(item => {
      const { point, value } = item;
      it(
        `Should successfully assign ${value} to ${JSON.stringify(point)} on image ${JSON.stringify(image)}`,
        () => {
          set(image, point, value);
          expect(image[point.r][point.c]).to.equal(value);
        },
      );
    });
  });
});
