# === BINARY SEARCH ===

# Strategy: Select the middle of the list and check if the target value is smaller or larger than the middle, then cut off the half that does not contain the value and repeat until the value is found. 
    # Only works for data sets that are already sorted.

# Big O:
    # Time: O(log n)

# IMPLEMENTATION:
nums_sorted = [0, 1, 2, 7, 10, 19, 37, 50, 84, 86, 295, 310, 462]

def binary_search (array, target, start, end):
    if end < start: return -1
    mid = (start + end) // 2
    if array[mid] == target: return mid
    if array[mid] < target:
        return binary_search(array, target, mid + 1, end)
    else:
        return binary_search(array, target, start, mid - 1)
    
print(binary_search(nums_sorted, 86, 0, len(nums_sorted)))