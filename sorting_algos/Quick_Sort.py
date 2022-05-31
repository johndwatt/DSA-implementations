# === QUICK SORT ===

# Strategy: Selects a pivot, then sorts numbers higher or lower than the pivot on either side of the list. Once sorted around the pivot, lists are separated and sorted around another chosen pivot. Process is repeated until all values are sorted, then lists are compared and combined. 
    # Unstable: Duplicate elements/elements with same sorting key may have their order changed in the output list.

# Best for: Generally the fastest sorting algorithm, unless you cannot guarantee a good pivot. Use when you aren't worried about worst case.

# Big O:
    # Time: O(n^2)
    # Space: O(log n)

# // IMPLEMENTATION:
nums = [10, 295, 37, 2, 84, 50, 1, 7, 86, 310, 462, 19, 0]

def quick_sort (array, left, right):
    if len(array) == 1:
        return array
    if left < right:
        partition_index = partition(array, left, right)
        quick_sort(array, left, partition_index - 1)
        quick_sort(array, partition_index + 1, right)
    return array

def partition(array, left, right):
    pivot = array[right]
    partition_index = left
    for i in range(left, right):
        if array[i] <= pivot:
            swap(array, i, partition_index)
            partition_index += 1
    swap(array, right, partition_index)
    return partition_index

def swap(array, first_idx, second_idx):
    temp = array[first_idx]
    array[first_idx] = array[second_idx]
    array[second_idx] = temp

# Select first and last index as 2nd and 3rd parameters
print(quick_sort(nums, 0, len(nums) - 1))

