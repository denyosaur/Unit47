// const LinkedList = require("./linked-list");
/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Deque {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** appendright(val): add new value to bottom of the queue. Returns undefined. */

  appendright(val) {
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

  /** appendleft(val): add new value to top of the queue. Returns undefined. */

  appendleft(val) {
    const newNode = new Node(val)

    if (this.size === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      this.first.previous = newNode
      newNode.next = this.first
      this.first = newNode
    }
    this.size++
    return undefined
  }

  /** popright(): remove the node from the bottom of the queue
   * and return its value. Should throw an error if the queue is empty. */

  popright() {
    try {
      const removedNode = this.last;

      if (this.size === 1) {
        this.first = null;
        this.last = null;
      } else {
        this.last.previous.next = null;
        this.last = removedNode.previous;
        removedNode.previous = null;
      }
      return removedNode.val;
    } catch (e) {
      throw new Error("Queue is empty");
    }
  }

  /** popleft(): remove the node from the bottom of the queue
 * and return its value. Should throw an error if the queue is empty. */

  popleft() {
    try {
      const removedNode = this.first;

      if (this.size === 1) {
        this.first = null;
        this.last = null;
      } else {
        this.first.next.previous = null;
        this.first = removedNode.next;
        removedNode.next = null;
      }
      this.size--;
      return removedNode.val;
    } catch (e) {
      throw new Error("Queue is empty");
    }
  }

  /** peekleft(): return the value of the first node in the queue. */

  peekleft() {
    return this.first.val
  }

  /** peekright(): return the value of the first node in the queue. */

  peekright() {
    return this.last.val
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0 ? true : false
  }
}

module.exports = Deque;
