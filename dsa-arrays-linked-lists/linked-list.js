/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.tail === null) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.tail === null) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++
  }

  /** pop(): return & remove last item. */

  pop() {
    let lastNode = this.tail;
    let currentNode = this.head;
    let previousNode = this.head

    if (this.length === 1) {
      this.tail = null
      this.head = null
      this.length--
      return lastNode.val;
    } else {
      while (currentNode.next) {
        previousNode = currentNode
        currentNode = currentNode.next;
      }

      this.tail = previousNode;
      this.tail.next = null
      this.length--

      return lastNode.val;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    let firstNode = this.head;

    if (this.length === 1) {
      this.head = null
      this.tail = null
      this.length--
      return firstNode.val
    } else {
      this.head = firstNode.next;
      firstNode.next = null;
      this.length--
      return firstNode.val;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let counter = 0;
    let currentNode = this.head
    while (currentNode) {
      if (idx === counter) return currentNode.val;
      currentNode = currentNode.next
      counter++
    }
    return -1
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let counter = 0
    let currentNode = this.head
    while (currentNode) {
      if (idx === counter) {
        currentNode.val = val
        break
      }
      currentNode = currentNode.next
      counter++
    }
    return -1
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let counter = 0;
    let newNode = new Node(val);
    let currentNode = this.head;

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.length === idx) {
      this.tail.next = newNode
      this.tail = newNode
    } else {
      while (currentNode.next) {
        if (counter === idx - 1) {
          newNode.next = currentNode.next;
          currentNode.next = newNode;
          break
        }
        currentNode = currentNode.next;
        counter++;
      }
    }
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let counter = 0
    let previousNode = this.head
    let currentNode = this.head
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      currentNode.next = null;
    }

    while (currentNode.next) {
      if (counter === idx) {
        previousNode.next = currentNode.next;
        currentNode.next = null;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
      counter++;
    }

    this.length--;
    return currentNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    let counter = 0
    let sum = 0
    let currentNode = this.head
    while (currentNode) {
      sum += currentNode.val
      counter++
      currentNode = currentNode.next
    }
    return sum === 0 ? 0 : sum / counter
  }
}

module.exports = LinkedList;
