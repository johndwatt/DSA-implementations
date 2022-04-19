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

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
}

