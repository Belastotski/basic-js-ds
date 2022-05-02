const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  
  constructor() {
    this.first = null;
    this.last = null;
  }


  getUnderlyingList() {
    return this.first;
  }

  enqueue(element) {
    if (!this.first) {
      this.first = new ListNode(element);
      this.first.value = element;
      this.last = this.first;
      return;
    }
    this.last.next = new ListNode(element);
    if (!this.first.next) this.first.next = this.last.next;

    this.last = this.last.next;
    this.last.value = element;
  }

  dequeue() {
    const res = this.first.value;
    this.first = this.first.next;
    return res;
  }

}

module.exports = {
  Queue
};
