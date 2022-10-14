import {
  ListNode,
  reverseLinkListIliterate,
  reverseLinkListRecursion,
} from "./link-list/reverseLinkList";
function main() {
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(5);
  reverseLinkListRecursion(head);
  reverseLinkListIliterate(head);
}
main();
