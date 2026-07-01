# Second Largest Element

## Problem
Find the second largest distinct element in an array.

## Approach
- Maintain two variables: `largest` and `secondLargest`.
- Traverse the array once.
- If a new largest element is found, move the previous largest to `secondLargest`.
- Otherwise, if the current element is smaller than `largest` but larger than `secondLargest`, update `secondLargest`.

## Time Complexity
O(n)

## Space Complexity
O(1)