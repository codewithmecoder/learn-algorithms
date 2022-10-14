export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
export function reverseLinkListRecursion(
  head: ListNode | null
): ListNode | null {
  if (head == null || head.next == null) return head;
  var res = reverseLinkListRecursion(head.next);
  head.next.next = head;
  head.next = null;
  return res;
}

export function reverseLinkListIliterate(
  head: ListNode | null
): ListNode | null {
  let prev = null,
    cur = head,
    next = null;
  while (cur != null) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  head = prev;
  console.log(head);
  return head;
}
