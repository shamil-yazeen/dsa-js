/**
 * Problem: Minimum Subarray Length
 * ---------------------------------------
 * Given an array of positive integers and a target sum,
 * return the minimal length of a contiguous subarray
 * whose sum is greater than or equal to the target.
 *
 * If no such subarray exists, return 0.
 *
 * Pattern: Sliding Window (Variable Size)
 *
 * Examples:
 * minSubArrayLen([2,3,1,2,4,3], 7)  // 2  (subarray [4,3])
 * minSubArrayLen([1,4,4], 4)        // 1
 * minSubArrayLen([1,1,1,1], 5)      // 0
 *
 * Approach:
 * 1. Expand window by moving right pointer.
 * 2. When sum >= target, shrink window from left.
 * 3. Track minimum window length.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function minSubArrayLen(arr, target) {
    if (!Array.isArray(arr)) {
        throw new TypeError("First argument must be an array");
    }

    if (typeof target !== "number") {
        throw new TypeError("Target must be a number");
    }

    let left = 0;
    let minLength = Infinity;
    let sum = 0;

    for (let right = 0; right < arr.length; right++) {
        if (typeof arr[right] !== "number") {
            throw new TypeError("Array must contain only numbers");
        }

        sum += arr[right];

        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= arr[left];
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

module.exports = minSubArrayLen;