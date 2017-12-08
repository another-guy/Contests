/*
Note: Try to solve this task in `O(n)` time using `O(1)` additional space, where `n` is the number of elements in the list, since this is what you'll be asked to do during an interview.

Given a singly linked list of integers, determine whether or not it's a palindrome.

Example

For `l = [0, 1, 0]`, the output should be
`isListPalindrome(l) = true`;
For `l = [1, 2, 2, 3]`, the output should be
`isListPalindrome(l) = false`.
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

function isListPalindrome(l: ListNode<number>): boolean {
  const reverse = [];
  for (let currentInReverser = l; currentInReverser != null; currentInReverser = currentInReverser.next) {
      reverse.push(currentInReverser.value);
  }
  
  let i = reverse.length - 1;
  let current = l;
  for (; i >= 0 && current != null; i--, current = current.next) {
      if (current.value !== reverse[i]) return false;
  }
  return i === -1 && current == null;
}
