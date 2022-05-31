# === BFS: Breadth First Search ===

# Strategy: Start with root node, then look left to right at the second level, then left to right on the third level (so on and so forth) until the target value is found. 

# Big O:
    # Time: O(n)

# IMPLEMENTATION:

def breadth_first_search(self):
    current_node = self.root
    result = []
    queue = []
    queue.append(current_node)

    while len(queue) > 0:
        current_node = queue.pop(0)
        result.append(current_node.value)
        if current_node.left:
            queue.append(current_node.left)
        if current_node.right:
            queue.append(current_node.right)
    
    return result

# Recursive
def breadth_first_search_R(self, queue, array):
    if not len(queue):
        return array
    current_node = queue.pop(0)
    array.append(current_node.value)

    if current_node.left:
        queue.append(current_node.left)
    if current_node.right:
        queue.append(current_node.right)

    return breadth_first_search_R(queue, array)
