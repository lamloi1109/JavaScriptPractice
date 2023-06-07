function createBinarySearchTree(initKeyList) {
  let root = null;

  if (Array.isArray(initKeyList) && initKeyList.length > 0) {
    initKeyList.forEach((key) => {
      root = insert(root, key);
    });
  }

  function getRoot() {
    return root;
  }

  function insert(node, key) {
    const newNode = {
      key,
      left: null,
      right: null,
    };
    if (node == null) {
      return newNode;
    }
    if (key === node.key) {
      throw new Error('Binary Search Tree can not contain duplicate node');
    }
    if (key > node.key) {
      node.right = insert(node.right, key);
    } else {
      node.left = insert(node.left, key);
    }
    return node;
  }

  function findMin(node) {
    if (node == null || (node.left == null && node.right == null)) {
      return node;
    }

    let minRoot = node;

    while (minRoot.left != null) {
      minRoot = minRoot.left;
    }

    return minRoot;
  }

  function findMax(node) {
    if (node == null || (node.left == null && node.right == null)) {
      return node;
    }

    let rightRoot = root;

    while (rightRoot.right != null) {
      rightRoot = rightRoot.right;
    }

    return rightRoot;
  }

  function search(node, key) {
    if (node == null) {
      return null;
    }

    if (key === node.key) {
      return node;
    }

    if (key < node.key) {
      return search(node.left, key);
    }
    return search(node.right, key);
  }

  function remove(node, key) {
    if (node == null) {
      return null;
    }

    if (key < node.key) {
      node.left = remove(node.left, key);
      return node;
    }
    if (key > node.key) {
      node.right = remove(node.right, key);
      return node;
    }

    // node is a leaf
    if (node.left == null && node.right == null) {
      return null;
    }
    // node has 1 child
    if (node.left == null) {
      node = node.right;
      return node;
    }
    if (node.right == null) {
      node = node.left;
      return node;
    }

    // replace node with successor
    const minNode = findMin(node.right);
    node.key = minNode.key;
    node.right = remove(node.right, minNode.key);
    return node;
  }

  function getHeight(node) {
    if (node == null) {
      return -1;
    }
    let leftHeight = getHeight(node.left);
    let rightHeight = getHeight(node.right);
    if (leftHeight > rightHeight) {
      return leftHeight + 1;
    }
    return rightHeight + 1;
  }

  function printNodesAtLevel(node, level) {
    if (node == null) {
      return;
    }
    if (level == 0) {
      console.log(node.key);
      return;
    }
    printNodesAtLevel(node.left, level - 1);
    printNodesAtLevel(node.right, level - 1);
  }

  // Breadth First Traversal
  function BFS() {
    const height = getHeight(root);
    for (let i = 0; i <= height; i++) {
      printNodesAtLevel(root, i);
    }
  }
  // Depth First Traversal
  // Left Root Right
  // Left Right Root
  // Root Left Right
  function DFSInOrderTraversal(node) {
    if (node == null) {
      return;
    }
    DFSInOrderTraversal(node.left);
    console.log(node.key);
    DFSInOrderTraversal(node.right);
  }

  function DFSPreOrderTraversal(node) {
    if (node == null) {
      return;
    }
    console.log(node.key);
    DFSPreOrderTraversal(node.left);
    DFSPreOrderTraversal(node.right);
  }

  function DFSPostOrderTraversal(node) {
    if (node == null) {
      return;
    }
    DFSPreOrderTraversal(node.left);
    DFSPreOrderTraversal(node.right);
    console.log(node.key);
  }

  return {
    root,
    getRoot,
    insert,
    findMin,
    findMax,
    search,
    getHeight,
    BFS,
    DFSInOrderTraversal,
    DFSPreOrderTraversal,
    DFSPostOrderTraversal,
    remove,
  };
}

const bnTree = createBinarySearchTree([10, 7, 15, 5, 9, 20, 13, 17]);
// console.log(bnTree.findMin(bnTree.getRoot()));
// console.log(bnTree.search(bnTree.getRoot(), 8));
// console.log(bnTree.getHeight(bnTree.getRoot()));
// console.log(bnTree.DFSInOrderTraversal(bnTree.getRoot()));
// console.log(bnTree.DFSPostOrderTraversal(bnTree.getRoot()));
// console.log(bnTree.root);

bnTree.root = bnTree.remove(bnTree.root, 5);

bnTree.root = bnTree.remove(bnTree.root, 20);

bnTree.root = bnTree.remove(bnTree.root, 10);
console.log(bnTree.root);
bnTree.DFSInOrderTraversal(bnTree.root);
