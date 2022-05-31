# === DFS: Depth First Search ===

# Strategy: Start with root node and follows one branch down as many levels as possibly until the target value is found or the end if reached. When the search can't go any farther, it continues at the nearest ancestor with an unexplored child (left moving right). Process is reapeted until target value is found or entire tree has been traversed.
    # Lower memory requirement because you don't have to store child pointers at each level. 
    # InOrder: List is returned with the values sorted in order.
    # PreOrder: List is returned with values of child nodes starting from the root and moving down each branch left to right.
    # PostOrder: List is returned with the values of one branch going from the leaf nodes to the ancestor nodes and ending with the root node (left to right).

# Big O:
    # Time: O(n)

# IMPLEMENTATION:

# InOrder
def DFS_in_order(node, array):
    if node.left:
        DFS_in_order(node.left, array)
    array.append(node.value)
    if node.right:
        DFS_in_order(node.right, array)
    return array

# PreOrder
def DFS_pre_order(node, array):
    array.append(node.value)
    if node.left:
        DFS_pre_order(node.left, array)
    if node.right:
        DFS_pre_order(node.right, array)
    return array

# PostOrder
def DFS_post_order(node, array):
    if node.left:
        DFS_pre_order(node.left, array)
    if node.right:
        DFS_pre_order(node.right, array)
    array.append(node.value)
    return array

# print(DFS_in_order(self.root, []))
# print(DFS_pre_order(self.root, []))
# print(DFS_post_order(self.root, []))