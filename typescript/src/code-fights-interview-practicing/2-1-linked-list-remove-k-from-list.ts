/*
Note: Try to solve this task in `O(n)` time using `O(1)` additional space, where `n` is the number of elements in the list, since this is what you'll be asked to do during an interview.

Given a singly linked list of integers `l` and an integer `k`, remove all elements from list `l` that have a value equal to `k`.

Example

For `l = [3, 1, 2, 3, 4, 5]` and `k = 3`, the output should be
`removeKFromList(l, k) = [1, 2, 4, 5]`;
For `l = [1, 2, 3, 4, 5, 6, 7]` and `k = 10`, the output should be
`removeKFromList(l, k) = [1, 2, 3, 4, 5, 6, 7]`.
*/

// Definition for singly-linked list:
class ListNode<T> {
  value: T;
  next: ListNode<T>;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

function removeKFromList(l: ListNode<number>, k: number): ListNode<number> {
  let current = l;
  let result: ListNode<number> = null;
  let resultTail = result;
  for (; current != null; current = current.next) {
      if (current.value != k) {
          if (!result) {
              result = new ListNode<number>(current.value);
              resultTail = result;
          } else {
              const newNode = new ListNode<number>(current.value);
              resultTail.next = newNode;
              resultTail = newNode;
          }
      }
  }
  return result;
}
