# Check if Array is Sorted

## Problem

Given an array, check whether it is sorted in ascending order.

### Example

```javascript
Input: [1, 2, 3, 4, 5]
Output: true

Input: [1, 5, 3, 4]
Output: false
```

---

## Approach

- Traverse the array from left to right.
- Compare the current element with the next element.
- If the current element is greater than the next element, the array is not sorted.
- Otherwise, continue until the end of the array.
- If no violation is found, return `true`.

---

## Time Complexity

**O(n)**

---

## Space Complexity

**O(1)**