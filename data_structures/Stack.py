# === STACK ===

# Definition: A last in first out data structure where only the most recently added item can be easily accessed or changed.

# Big O:
#     Lookup: O(n)
#     Pop: O(1)
#     Push: O(1)
#     Peek: O(1)

# IMPLEMENTATION - Array:
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



