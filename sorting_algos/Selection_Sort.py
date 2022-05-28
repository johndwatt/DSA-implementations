# === SELECTION SORT ===

# Strategy: Scans list of items for the smallest element and swaps that element for the one in the first position. Loops repeatedly until all elements are sorted. 

# Best for: Nothing - terribly inefficient. 

# Big O:
#     Time: O(n^2)
#     Space: O(1)

# IMPLEMENTATION:
nums = [10, 295, 37, 2, 84, 50, 1, 7, 86, 310, 462, 19, 0]

def selection_sort(array):
    for i in range(len(array)):
        mini = i
        temp = array[i]
        for j in range(i+1, len(array)):
            if array[j] < array[mini]:
                mini = j
        array[i] = array[mini]
        array[mini] = temp
    return array

print(selection_sort(nums))