class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val)
    if (!this.root) {
      this.root = newNode
      return this
    }

    let current = this.root

    while (current) {
      if (current.val < val) {
        if (current.right) {
          current = current.right
        } else {
          current.right = newNode
          return this
        }
      }
      if (current.val > val) {
        if (current.left) {
          current = current.left
        } else {
          current.left = newNode
          return this
        }
      }
    }
    return this
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    let newNode = new Node(val)
    if (!this.root) {
      this.root = newNode
      return this
    }

    if (current.val < val) {
      if (current.right === null) {
        current.right = newNode
        return this
      } else {
        return this.insertRecursively(val, current.right)
      }
    } else if (current.val > val) {
      if (current.left === null) {
        current.left = newNode
        return this
      } else {
        return this.insertRecursively(val, current.left)
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let search = this.root
    while (search) {
      if (search.val === val) return search
      search = val < search.val ? search.left : search.right
    }
    return undefined
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, search = this.root) {
    if (search.val === val) {
      return search
    }
    if (val < search.val && search.left !== null) {
      return this.findRecursively(val, search.left)
    } else if (val > search.val && search.right !== null) {
      return this.findRecursively(val, search.right)
    }

    return undefined
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root) {
    let array = []
    array.push(node.val)
    if (node.left) array = [...array, ...this.dfsPreOrder(node.left)]
    if (node.right) array = [...array, ...this.dfsPreOrder(node.right)]

    return array
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(root = this.root) {
    let array = []

    function traverse(node) {
      if (node.left) traverse(node.left)
      array.push(node.val)
      if (node.right) traverse(node.right)
    }

    traverse(root)

    return array
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(root = this.root) {
    let array = []

    function traverse(node) {
      if (node.left) traverse(node.left)

      if (node.right) traverse(node.right)
      array.push(node.val)
    }

    traverse(root)

    return array
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let visited = []

    function traverse(array) {
      let children = []

      for (let node of array) {
        visited.push(node.val)
        if (node.left) children.push(node.left)
        if (node.right) children.push(node.right)
      }
      if (children.length) traverse(children)
    }
    traverse([this.root])
    return visited
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
