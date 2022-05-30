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
    for i in range(1, len(array)):
        temp = array[i]
        j = i - 1
        while j >= 0 and temp < array[j]:
            array[j + 1] = array[j]
            j -= 1
        array[j + 1] = temp
    return array
    
print(insertion_sort(nums))

