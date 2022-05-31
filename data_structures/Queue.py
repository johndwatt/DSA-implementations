# === QUEUE ===

# Definition: A first in first out data structure where only the earliest added item can be easily accessed or changed.

# Big O:
    # Lookup O(n)
    # Enqueue: O(1)
    # Dequeue: O(1)
    # Peek: O(1)

# IMPLEMENTATION:

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

    def __str__(self):
        return str({
            "Value": self.value, 
            "Next": self.next
        })

    def __repr__(self):
        return str({
            "Value": self.value, 
            "Next": self.next
        })

class Queue:
    def __init__(self):
        self.first = None
        self.last = None
        self.length = 0

    def __str__(self):
        return str(self.__dict__)

    def peek(self):
        """Retrieves value of the earliest added item at the start of the queue."""
        return self.first.value

    def enqueue(self, item):
        """Adds an item to the end of the queue."""
        new_node = Node(item)
        if self.length == 0:
            self.first = new_node
            self.last = new_node
        elif self.length == 1:
            self.last = new_node
            self.first.next = new_node
        else:
            self.last.next = new_node
            self.last = new_node
        self.length += 1
        return self
    
    def dequeue(self):
        """Removes an item from the start of the queue."""
        if not self.first:
            return None
        if self.last == self.first:
            self.last = None
        self.first = self.first.next
        self.length -= 1
        return self

    def print_queue(self):
        """Prints Queue values for easy visualization."""
        arr = []
        current_node = self.first
        while current_node != None:
            arr.append(current_node.value)
            current_node = current_node.next
        return arr

my_queue = Queue()
print(my_queue.enqueue("bird"))
print(my_queue.enqueue("plane"))
print(my_queue.enqueue("superman"))
print(my_queue.print_queue())
print(my_queue.peek())
print(my_queue.dequeue())
print(my_queue.print_queue())
print(my_queue.peek())
print(my_queue.enqueue("ANOTHER ONE"))
print(my_queue.print_queue())