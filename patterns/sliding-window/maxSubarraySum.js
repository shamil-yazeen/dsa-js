/**
 * Problem: Max Subarray Sum
 * ---------------------------------------
 * Given an array of numbers and a number n,
 * calculate the maximum sum of n consecutive elements.
 *
 * Pattern: Sliding Window
 *
 * Examples:
 * maxSubarraySum([1,2,5,2,8,1,5], 2)  // 10
 * maxSubarraySum([1,2,5,2,8,1,5], 4)  // 17
 * maxSubarraySum([4,2,1,6], 1)        // 6
 * maxSubarraySum([], 4)               // null
 *
 * Approach:
 * 1. Compute sum of first window of size n.
 * 2. Slide the window forward one element at a time.
 * 3. Subtract element leaving the window and add new element.
 * 4. Track maximum sum.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function maxSubarraySum(arr, num) {
  if (!Array.isArray(arr)) {
    throw new TypeError("First argument must be an array");
  }

  if (typeof num !== "number" || !Number.isInteger(num) || num <= 0) {
    throw new TypeError("Window size must be a positive integer");
  }

  if (arr.length < num) return null;

  let maxSum = 0;

  // Initialize first window
  for (let i = 0; i < num; i++) {
    if (typeof arr[i] !== "number") {
      throw new TypeError("Array must contain only numbers");
    }
    maxSum += arr[i];
  }

  let tempSum = maxSum;

  // Slide window
  for (let i = num; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      throw new TypeError("Array must contain only numbers");
    }

    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

module.exports = maxSubarraySum;