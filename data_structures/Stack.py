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
        """Prints the attributes of the class object in a dictionary format"""
        return str(self.__dict__)
    
stack_test = MyStack()
print(stack_test)