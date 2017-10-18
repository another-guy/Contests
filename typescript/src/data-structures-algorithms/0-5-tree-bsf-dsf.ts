export class Node<T> { left: Node<T>; right: Node<T>; value: T; }
export class Tree<T> extends Node<T> { }

export function dfs<T>(tree: Tree<T>): Node<T>[] {
  const traverseOrder = [];
  const stack: Node<T>[] = [];
  stack.push(tree);
  while (stack.length > 0) {
    const currentNode = <Node<T>>stack.pop();
    traverseOrder.push(currentNode);

    if (currentNode.right)
      stack.push(currentNode.right);
    if (currentNode.left)
      stack.push(currentNode.left);
  }

  return traverseOrder;
}

export function bfs<T>(tree: Tree<T>): Node<T>[] {
  const traverseOrder = [];
  const list: Node<T>[] = [];
  list.push(tree);
  while (list.length > 0) {
    const [ headElement ] = list.splice(0, 1);
    traverseOrder.push(headElement);
    
    if (headElement.left)
      list.push(headElement.left);
    if (headElement.right)
      list.push(headElement.right);
  }
  return traverseOrder;
}

[
  {
    name: 'graph for DFS',
    tree: <Tree<string>>{
      value: 'a',
      left: {
        value: 'b',
        left: { value: 'c' },
        right: { value: 'd' }
      },
      right: {
        value: 'e',
        left: { value: 'f' },
        right: { value: 'g' }
      }
    }
  },
  {
    name: 'graph for BFS',
    tree: <Tree<string>> {
      value: 'a',
      left: {
        value: 'b',
        left: { value: 'd' },
        right: { value: 'e' }
      },
      right: {
        value: 'c',
        left: { value: 'f' },
        right: { value: 'g' }
      }
    }
  }
].forEach(testCase => {
  const dfsResult = dfs(testCase.tree);
  console.warn(`DFS: ${testCase.name}`, dfsResult.map(node => node.value).join('->'));

  
  const bfsResult = bfs(testCase.tree);
  console.warn(`BFS: ${testCase.name}`, bfsResult.map(node => node.value).join('->'));
});