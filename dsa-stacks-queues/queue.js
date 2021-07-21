// const LinkedList = require("./linked-list");
/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    // this._link = new LinkedList()
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val)

    if (this.size === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.size++
    return undefined
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    try {
      const removedNode = this.first;

      this.first = removedNode.next
      removedNode.next = null
      this.size--

      return removedNode.val
    } catch (e) {
      throw error
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0 ? true : false
  }
}

module.exports = Queue;
