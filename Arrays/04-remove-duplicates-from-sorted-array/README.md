# Remove Duplicates from Sorted Array

## LeetCode

**#26 - Remove Duplicates from Sorted Array**

---

## Problem

Given a sorted integer array `nums`, remove the duplicates in-place such that each unique element appears only once. Return the number of unique elements.

---

## Example

```javascript
Input:
nums = [1,1,2]

Output:
2
nums = [1,2,_]
```

---

## Approach

- The array is already sorted.
- Use a pointer `k` to track the next position for a unique element.
- Traverse the array from left to right.
- If the current element is different from the previous unique element, place it at index `k` and increment `k`.
- Return `k`.

---

## Time Complexity

**O(n)**

---

## Space Complexity

**O(1)**