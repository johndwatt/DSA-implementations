# === STACK ===

# Definition: A last in first out data structure where only the most recently added item can be easily accessed or changed.

# Big O:
#     Lookup: O(n)
#     Pop: O(1)
#     Push: O(1)
#     Peek: O(1)

# IMPLEMENTATION - Array:
from sqlalchemy import null


class MyStack:
    def __init__(self):
        self.stack = []
    
    def __str__(self):
        """Prints the attributes of the class object in a dictionary format."""
        return str(self.__dict__)

    def peek(self):
        """Retrieves value of item at the top of the stack."""
        return self.stack[-1]

    def push(self, item):
        """Adds an item to the top of the stack."""
        self.stack.append(item)
        return self.stack

    def pop(self):
        """Removes an item from the top of the stack."""
        self.stack.pop()
        return self.stack
    
# stack_test = MyStack()
# print(stack_test)
# print(stack_test.push("bird"))
# print(stack_test.push("plane"))
# print(stack_test.peek())
# print(stack_test.push("delete me"))
# print(stack_test)
# stack_test.pop()
# print(stack_test)

# IMPLEMENTATION - LINKED LIST
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
    
class MyStackTwo:
    def __init__(self):
        self.top = None
        self.bottom = None
        self.length = 0

    def __str__(self):
        """Prints the attributes of the class object in a dictionary format."""
        return str(self.__dict__)

    def peek(self):
        """Retrieves value of item at the top of the stack."""
        return self.top
    
    def push(self, item):
        """Adds an item to the top of the stack."""
        new_node = Node(item)
        if self.length == 0:
            self.top = new_node
            self.bottom = new_node
        else:
            pointer = self.top
            self.top = new_node
            self.top.next = pointer
        self.length += 1
        return self

    def pop(self):
        if not self.top:
            return None
        if self.top == self.bottom:
            self.bottom = None
        self.top = self.top.next
        self.length -= 1
        return self

stack_test = MyStackTwo()
print(stack_test)
print(stack_test.push("bird"))
print(stack_test.push("plane"))
print(stack_test.peek())
print(stack_test.push("delete me"))
print(stack_test)
print(stack_test.peek())
stack_test.pop()
print(stack_test)
print(stack_test.peek())