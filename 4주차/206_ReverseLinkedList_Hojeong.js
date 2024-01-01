var reverseList = function (head) {
  if (!head) return head;

  const values = [];

  while (head) {
    values.push(head.val || 0);
    head = head.next;
  }

  const newHead = new ListNode();
  let reversedList = newHead;

  for (let i = values.length - 1; i >= 0; i--) {
    reversedList.val = values[i];
    if (i !== 0) {
      reversedList.next = new ListNode();
      reversedList = reversedList.next;
    }
  }

  return newHead;
};
