# === LINEAR SEARCH aka Sequential Search ===

# Strategy: Sequentially check every value in a list and compare it to the target value until a match is found. 

# Big O:
    # Time: O(n) - bad for large data sets.

# IMPLEMENTATION:
nums = [10, 295, 37, 2, 84, 50, 1, 7, 86, 310, 462, 19, 0]

# From Scratch:
def linear_search (array, target):
    """Finds target value in list and returns the index where the value is stored."""
    for i in range(len(array)):
        if array[i] == target:
            return i
    return None

print(linear_search(nums, 86)) 
