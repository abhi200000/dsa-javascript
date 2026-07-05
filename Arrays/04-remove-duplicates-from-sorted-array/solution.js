/**
 * LeetCode #26 - Remove Duplicates from Sorted Array
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function removeDuplicates(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}

// Test Cases
let nums1 = [1, 1, 2];
let k1 = removeDuplicates(nums1);
console.log(k1);               // 2
console.log(nums1);            // [1, 2, 2]

let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k2 = removeDuplicates(nums2);
console.log(k2);               // 5
console.log(nums2);            // [0, 1, 2, 3, 4, 2, 2, 3, 3, 4]