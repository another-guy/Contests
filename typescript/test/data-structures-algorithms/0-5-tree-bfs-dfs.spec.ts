import { expect } from 'chai';

import { bfs, dfs } from '../../src/data-structures-algorithms/0-5-tree-bfs-dfs';

const bfsTree = {
  value: 'a',
  left: {
    value: 'b',
    left: { value: 'd', left: undefined, right: undefined },
    right: { value: 'e', left: undefined, right: undefined },
  },
  right: {
    value: 'c',
    left: { value: 'f', left: undefined, right: undefined },
    right: { value: 'g', left: undefined, right: undefined },
  },
};

const dfsTree = {
  value: 'a',
  left: {
    value: 'b',
    left: { value: 'c', left: undefined, right: undefined },
    right: { value: 'd', left: undefined, right: undefined },
  },
  right: {
    value: 'e',
    left: { value: 'f', left: undefined, right: undefined },
    right: { value: 'g', left: undefined, right: undefined },
  },
};

describe(`tree-bfs`, () => {
  it(`should correctly traverse the tree in breadth first order`, () => {
    const traveralOrder = bfs(bfsTree);

    expect(traveralOrder.map(nodes => nodes.value))
      .to.deep.equal(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
  });
});

describe(`tree-dfs`, () => {
  it(`should correctly traverse the tree in depth first order`, () => {
    const traveralOrder = dfs(dfsTree);

    expect(traveralOrder.map(nodes => nodes.value))
      .to.deep.equal(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
  });
});
