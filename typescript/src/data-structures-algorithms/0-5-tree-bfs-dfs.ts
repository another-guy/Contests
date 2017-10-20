export interface Node<T> { left: Node<T> | undefined; right: Node<T> | undefined; value: T; }
export interface Tree<T> extends Node<T> { }

export function dfs<T>(tree: Tree<T>): Node<T>[] {
  const traverseOrder = [];
  const stack: Node<T>[] = [];
  stack.push(tree);
  while (stack.length > 0) {
    const currentNode = stack.pop() as Node<T>;
    traverseOrder.push(currentNode);

    if (currentNode.right) stack.push(currentNode.right);
    if (currentNode.left) stack.push(currentNode.left);
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

    if (headElement.left) list.push(headElement.left);
    if (headElement.right) list.push(headElement.right);
  }
  return traverseOrder;
}
