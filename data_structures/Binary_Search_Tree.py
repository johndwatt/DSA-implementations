# === BINARY SEARCH TREE ===

# Tree Definition: Hierarchical, nonlinear DS composed of a rood node and zero or more child nodes.

# Binary Search Tree Definition: Tree where each node can only have up to two child nodes and each node can only have one parent. Efficient tree for searching that preserves relationships between nodes. Higher values are stored to the right, lower values are stored to the left. 
    # Balanced: Closest to a perfect binary tree as possible, where every node has exactly two child nodes and the bottom level is completely full. Very efficient.

# Big O - BALANCED: 
    # Lookup: O(log n)
    # Insert: O(log n)
    # Delete: O(log n)

# Big O - UNBALANCED:
    # Lookup: O(n)
    # Insert: O(n)
    # Delete: O(n)

# IMPLEMENTATION:
class Node:
    def __init__(self, value):
        self.value = value
        self.right = None
        self.left = None

    def __str__(self):
        return str({
            "Value": self.value, 
            "Left": self.left, 
            "Right": self.right
        })

    def __repr__(self):
        return str({
            "Value": self.value, 
            "Left": self.left, 
            "Right": self.right
        })

# def traverse(node):
    # """Traverses binary search tree and returns an object with all values in the tree."""
    # tree = { "value": node.value }
    # tree.left = None if node.left == None else traverse(node.left)
    # tree.right = None if node.right == None else traverse(node.right)
    # return tree

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def __str__(self):
        """Prints the attributes of the class object in a dictionary format."""
        return str(self.__dict__)

    def insert(self, value):
        """Adds a new node with the given value to the binary search tree."""
        new_node = Node(value)
        if self.root == None:
            self.root = new_node
        else:
            current_node = self.root
            while(True):
                if value < current_node.value:
                    # GO LEFT
                    if not current_node.left:
                        current_node.left = new_node
                        return self
                    current_node = current_node.left
                else:
                    # GO RIGHT
                    if not current_node.right:
                        current_node.right = new_node
                        return self
                    current_node = current_node.right

    def lookup(self, value):
        """Locate and retrieve node where given value is stored."""
        if not self.root:
            return None
        current_node = self.root
        while (current_node):
            if value < current_node.value:
                current_node = current_node.left
            elif value > current_node.value:
                current_node = current_node.right
            elif value == current_node.value:
                return current_node
        return None

    def remove(self, value):
        """Locate and remove node where given value is stored."""
        if not self.root:
            return False
        current_node = self.root
        parent_node = None
        while current_node:
            if value < current_node.value:
                parent_node = current_node
                current_node = current_node.left
            elif value > current_node.value:
                parent_node = current_node
                current_node = current_node.right
            elif value == current_node.value:
                # No right child
                if current_node.right == None:
                    if parent_node == None:
                        self.root = current_node.left
                    else: 
                        if current_node.value < parent_node.value:
                            parent_node.left = current_node.left
                        elif current_node.value > parent_node.value:
                            parent_node.right = current_node.left
                # Right child no left child
                elif current_node.right.left == None:
                    current_node.right.left == current_node.left
                    if parent_node == None:
                        self.root = current_node.right
                    else:
                        if current_node.value < parent_node.value:
                            parent_node.left = current_node.right
                        elif current_node.value > parent_node.value:
                            parent_node.right = current_node.right
                # Right child with a left child
                else:
                    leftmost = current_node.right.left
                    leftmost_parent = current_node.right
                    while leftmost.left != None:
                        leftmost_parent = leftmost
                        leftmost = leftmost.left
                    leftmost_parent.left = leftmost.right
                    leftmost.left = current_node.left
                    leftmost.right = current_node.right

                    if parent_node == None:
                        self.root = leftmost
                    else:
                        if current_node.value < parent_node.value:
                            parent_node.left = leftmost
                        elif current_node.value > parent_node.value:
                            parent_node.right = leftmost
                return True



tree = BinarySearchTree()
print(tree)
print(tree.insert(10))
print(tree.insert(5))
print(tree.insert(50))
print(tree.lookup(50))
print(tree.insert(1))
print(tree.remove(1))
print(tree)
print(tree.lookup(1))

