/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let searchArr = [this.root]
    let total = 0
    while (searchArr.length > 0 && this.root !== null) {
      const current = searchArr.pop()
      total += current.val
      for (let child of current.children) {
        searchArr.push(child)
      }
    }
    return total
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let searchArr = [this.root]
    let count = 0
    while (searchArr.length > 0 && this.root !== null) {
      const current = searchArr.pop()
      if (current.val % 2 === 0) count++
      for (let child of current.children) {
        searchArr.push(child)
      }
    }
    return count
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let searchArr = [this.root]
    let count = 0
    while (searchArr.length && this.root !== null) {
      const current = searchArr.pop()
      if (current.val > lowerBound) count++

      for (let child of current.children) {
        searchArr.push(child)
      }
    }
    return count
  }
}

module.exports = { Tree, TreeNode };
