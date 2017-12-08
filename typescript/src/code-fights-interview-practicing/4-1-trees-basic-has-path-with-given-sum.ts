/*
Given a binary tree `t` and an integer `s`, determine whether there is a root to leaf path in `t` such that the sum of vertex values equals `s`.

Example

For

```
t = {
    "value": 4,
    "left": {
        "value": 1,
        "left": {
            "value": -2,
            "left": null,
            "right": {
                "value": 3,
                "left": null,
                "right": null
            }
        },
        "right": null
    },
    "right": {
        "value": 3,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 2,
            "left": {
                "value": -2,
                "left": null,
                "right": null
            },
            "right": {
                "value": -3,
                "left": null,
                "right": null
            }
        }
    }
}
```

and `s = 7,` the output should be `hasPathWithGivenSum(t, s) = true`.

This is what this tree looks like:

```
      4
     / \
    1   3
   /   / \
  -2  1   2
    \    / \
     3  -2 -3
```

Path `4 -> 3 -> 2 -> -2` gives us `7`, the required sum.

For

```
t = {
    "value": 4,
    "left": {
        "value": 1,
        "left": {
            "value": -2,
            "left": null,
            "right": {
                "value": 3,
                "left": null,
                "right": null
            }
        },
        "right": null
    },
    "right": {
        "value": 3,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 2,
            "left": {
                "value": -4,
                "left": null,
                "right": null
            },
            "right": {
                "value": -3,
                "left": null,
                "right": null
            }
        }
    }
}
```

and `s = 7`, the output should be `hasPathWithGivenSum(t, s) = false`.

This is what this tree looks like:

```
      4
     / \
    1   3
   /   / \
  -2  1   2
    \    / \
     3  -4 -3
```

There is no path from root to leaf with the given sum `7`.
*/

// Definition for binary tree:
class Tree<T> {
  value: T;
  left: Tree<T>;
  right: Tree<T>;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function hasPathWithGivenSum(t: Tree<number>, s: number): boolean {
    const isLeaf = (tree: Tree<number>) => tree.left == null && tree.right == null;
    
    const hasPathWithGivenSumRecursive = (tree: Tree<number>, prevSum: number) => {
        if (tree == null) return false;
        if (isLeaf(tree)) return tree.value + prevSum === s;
        const inLeft = hasPathWithGivenSumRecursive(tree.left, prevSum + tree.value);
        if (inLeft) return true;
        return hasPathWithGivenSumRecursive(tree.right, prevSum + tree.value);
    };
    
    if (t === null) return s === 0;
    return hasPathWithGivenSumRecursive(t, 0);
}