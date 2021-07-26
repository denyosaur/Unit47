/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(parent = [this.root], depth = 1) {
    let searchArr = [...parent]
    let children = []

    if (this.root === null) return 0

    if (searchArr.length > 0) {
      for (let child of searchArr) {
        if (child.left === null && child.right === null) return depth + 1
        if (child.left !== null) children.push(child.left)
        if (child.right !== null) children.push(child.right)
      }
    }
    return this.minDepth(children, depth++)
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(parent = [this.root], depth = 1) {
    let searchArr = [...parent]
    let children = []

    if (this.root === null) {
      return 0
    } else if (this.root.left === null && this.root.right === null) {
      return depth
    } else if (searchArr.length === 0) {
      return depth - 1
    }

    if (searchArr.length > 0) {
      for (let child of searchArr) {
        if (child.left !== null) children.push(child.left)
        if (child.right !== null) children.push(child.right)
      }
    }
    return this.maxDepth(children, depth + 1)
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let sum = 0
    function sumNode(node) {
      if (node === null) return 0
      let left = sumNode(node.left)
      let right = sumNode(node.right)
      sum = Math.max(sum, node.val + left + right)
      return Math.max(0, node.val + left, node.val + right)
    }
    sumNode(this.root)
    return sum
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (this.root === null) return null
    let nextNum = null;

    function search(node) {
      if (node.left) search(node.left)
      if (node.right) search(node.right)
      let num = node.val
      if ((lowerBound < num && num < nextNum) || (lowerBound < num && nextNum === null)) return nextNum = Math.max(num, lowerBound)
    }

    search(this.root)

    return nextNum ? nextNum : null
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2, root = this.root) {
    let firstDepth = 0
    let secondDepth = 0

    function findDepth(findNode, whichDepth, startNode = root, depth = 1) {
      if (whichDepth === "first") {
        if (findNode === startNode) firstDepth = depth
      } else {
        if (findNode === startNode) secondDepth = depth
      }

      if (startNode.right) findDepth(findNode, whichDepth, startNode.right, depth + 1)
      if (startNode.left) findDepth(findNode, whichDepth, startNode.left, depth + 1)
      return null
    }

    function checkParent(node1, node2) {
      let start = [root]

      while (start.length) {
        let current = start.pop()
        if (current.left && current.right) {
          if ((node1 === current.left && node2 === current.right) || (node2 === current.left && node1 === current.right)) {
            return true
          } else {
            start.push(current.left)
            start.push(current.right)
          }
        }
      }
      return false
    }

    findDepth(node1, "first")
    findDepth(node2, "second")
    let sameParent = checkParent(node1, node2)
    console.log(firstDepth, secondDepth)
    return sameParent ? false : firstDepth === secondDepth
  }


  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
