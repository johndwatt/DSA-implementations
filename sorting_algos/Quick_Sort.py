# === QUICK SORT ===

# Strategy: Selects a pivot, then sorts numbers higher or lower than the pivot on either side of the list. Once sorted around the pivot, lists are separated and sorted around another chosen pivot. Process is repeated until all values are sorted, then lists are compared and combined. 
    # Unstable: Duplicate elements/elements with same sorting key may have their order changed in the output list.

# Best for: Generally the fastest sorting algorithm, unless you cannot guarantee a good pivot. Use when you aren't worried about worst case.

# Big O:
    # Time: O(n^2)
    # Space: O(log n)

# // IMPLEMENTATION:
nums = [10, 295, 37, 2, 84, 50, 1, 7, 86, 310, 462, 19, 0]