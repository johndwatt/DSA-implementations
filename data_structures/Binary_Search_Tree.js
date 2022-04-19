// === BINARY SEARCH TREE ===

// Tree Definition: Hierarchical, nonlinear DS composed of a rood node and zero or more child nodes.

// Binary Search Tree Definition: Tree where each node can only have up to two child nodes and each node can only have one parent. Efficient tree for searching that preserves relationships between nodes. Higher values are stored to the right, lower values are stored to the left. 

    // Balanced: Closest to a perfect binary tree as possible, where every node has exactly two child nodes and the bottom level is completely full. Very efficient.

// Big O - BALANCED: 
    // Lookup: O(log n)
    // Insert: O(log n)
    // Delete: O(log n)

// Big O - UNBALANCED: 
    // Lookup: O(n)
    // Insert: O(n)
    // Delete: O(n)

// IMPLEMENTATION:

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

/**
 * Traverses binary search tree and returns an object with all values in the tree.
 * @param {*} node Node to begin traversing from.
 * @returns Tree object with node values.
 */
const traverse = function(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    /**
     * Adds a new node with the given value to the binary search tree.
     * @param {*} value Value to be added to the tree.
     * @returns Updated tree.
     */
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true) {
                if (value < currentNode.value) {
                    // GO LEFT
                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    // GO RIGHT
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    /**
     * Locate and retrieve node where given value is stored.
     * @param {*} value Value to be searched for.
     * @returns Node with matching value, or null if no nodes match.
     */
    lookup(value) {
        if (!this.root) {
            return null;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (value === currentNode.value) {
                return currentNode;
            }
        }
        return null;
    }

}

const tree = new BinarySearchTree();
console.log(tree);
console.log(tree.insert(10))
console.log(tree.insert(5))
console.log(tree.insert(50))
console.log(traverse(tree.root))
console.log(tree.insert(1))
console.log(tree.insert(55))
console.log(tree.insert(5000))
console.log(traverse(tree.root))
console.log(tree.lookup(55))

