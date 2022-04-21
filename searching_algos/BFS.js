// === BFS: Breadth First Search ===

// Strategy: Start with root node, then look left to right at the second level, then left to right on the third level (so on and so forth) until the target value is found. 

// Big O:
    // Time: O(n)

// IMPLEMENTATION:

const breadthFirstSearch = function () {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
        currentNode = queue.shift();
        list.push(currentNode.value);
        if(currentNode.left) {
            queue.push(currentNode.left);
        }
        if(currentNode.right) {
            queue.push(currentNode.right);
        }
    }

    return list;
}

// Recursive:
const breadthFirstSearchR = function (queue, list) {
    if (!queue.length) {
        return list;
    }
    const currentNode = queue.shift();
    list.push(currentNode.value);

    if(currentNode.left) {
        queue.push(currentNode.left);
    }
    if(currentNode.right) {
        queue.push(currentNode.right);
    }

    return breadthFirstSearchR(queue, list);
}
