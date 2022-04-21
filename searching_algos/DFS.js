// === DFS: Depth First Search ===

// Strategy: Start with root node and follows one branch down as many levels as possibly until the target value is found or the end if reached. When the search can't go any farther, it continues at the nearest ancestor with an unexplored child (left moving right). Process is reapeted until target value is found or entire tree has been traversed.
    // Lower memory requirement because you don't have to store child pointers at each level. 
    // InOrder: List is returned with the values sorted in order.
    // PreOrder: List is returned with values of child nodes starting from the root and moving down each branch left to right.
    // PostOrder: List is returned with the values of one branch going from the leaf nodes to the ancestor nodes and ending with the root node (left to right).

// Big O:
    // Time: O(n)

// IMPLEMENTATION:

// InOrder: 
const DFSInOrder = function (node, list) {
    if (node.left) {
        DFSInOrder(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
        DFSInOrder(node.right, list);
    }
    return list;
}

// PreOrder:
const DFSPreOrder = function (node, list) {
    list.push(node.value);
    if (node.left) {
        DFSPreOrder(node.left, list);
    }
    if (node.right) {
        DFSPreOrder(node.right, list);
    }
    return list;
}

// PostOrder:
const DFSPostOrder = function (node, list) {
    if (node.left) {
        DFSPostOrder(node.left, list);
    }
    if (node.right) {
        DFSPostOrder(node.right, list);
    }
    list.push(node.value);
    return list;
}

console.log(DFSInOrder(this.root, []))
console.log(DFSPreOrder(this.root, []))
console.log(DFSPostOrder(this.root, []))