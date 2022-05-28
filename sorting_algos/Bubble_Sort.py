# === BUBBLE SORT ===

# Strategy: Bubble up the largest value by passing through the data multiple times. 

# Best for: Nothing - terribly inefficient. 

# Big O:
#     Time: O(n^2)
#     Space: O(1)

# IMPLEMENTATION:
from numpy import array


nums = [10, 295, 37, 2, 84, 50, 1, 7, 86, 310, 462, 19, 0]

def bubble_sort(arr):
    """Sorts values inefficiently in-place."""
    for i in range(len(arr)):
        for j in range(len(arr) - 1):
            if (arr[j] > arr[j + 1]):
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
    return arr

print(bubble_sort(nums))