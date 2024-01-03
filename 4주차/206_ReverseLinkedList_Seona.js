var reverseList = function (head) {
  const stack = [];
  let result = null;
  let parent = null;

  while (head) {
    stack.push(head.val);
    head = head.next;
  }

  while (stack.length) {
    let node = new ListNode(stack.pop());

    if (result) {
      parent.next = node;
      parent = parent.next;
    } else {
      result = node;
      parent = result;
    }
  }

  return result;
};
