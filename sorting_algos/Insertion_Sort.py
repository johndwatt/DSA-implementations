# === INSERTION SORT ===

# Strategy: Checks each item sequentially and inserts it where it should go in relation to the items already checked.

# Best for: When the list is mostly sorted already or with very small samples. Otherwise, inefficient. 

# Big O:
    # Time: O(n^2) / O(n) best case with good conditions
    # Space: O(1)

# IMPLEMENTATION:
nums = [10, 295, 37, 2, 84, 50, 1, 7, 86, 310, 462, 19, 0]

def insertion_sort(array):
    """Sorts array of values inefficiently in-place."""
    for i in range(len(array)):
        if array[i] < array[0]:
            array.insert(0, array[i:1][0])
        else:
            if array[i] < array[i - 1]:
                j = 1
                while j < i:
                    if array[i] >= array[j-1] and array[i] < array[j]:
                        array.insert(0, array[i:1][0])
                    j += 1
    return array
# UNFINISHED - ISSUE IN LINE 24
print(insertion_sort(nums))

