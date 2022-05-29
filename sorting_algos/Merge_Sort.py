# === MERGE SORT ===

# Strategy: Divides the list in half repeatedly until there are only pairs. Then compares the adjacent elements and sorts them, working its way back up comparing different sulists and sorting them until the entire list is sorted. 
    # Stable: Duplicate elements/elements with same sorting key will keep their original order in the output.

# Best for: Any time you are not worried about space complexity. Extremely efficient.

# Big O:
    # Time: O(n log n)
    # Space: O(n)

# IMPLEMENTATION:
nums = [10, 295, 37, 2, 84, 50, 1, 7, 86, 310, 462, 19, 0]

def mergeSort(array):
    """Efficiently sorts given array using a divide and conquer approach."""
    if len(array) <= 1:
        return array
    middle = len(array) // 2
    leftArr = array[0:middle]
    rightArr = array[middle:]
    return merge(mergeSort(leftArr), mergeSort(rightArr))

def merge(left, right):
    """Merges the left and right sides together while comparing and sorting values."""
    result = []
    leftIdx = 0
    rightIdx = 0
    while leftIdx < len(left) and rightIdx < len(right):
        if left[leftIdx] < right[rightIdx]:
            result.append(left[leftIdx])
            leftIdx += 1
        else:
            result.append(right[rightIdx])
            rightIdx += 1
    return result + left[leftIdx:] + right[rightIdx:]

print(mergeSort(nums))