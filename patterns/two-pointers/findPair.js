/**
 * Problem: Find Pair
 * ---------------------------------------
 * Given an array of numbers and a target number,
 * return true if there exists a pair of numbers
 * whose difference equals the target.
 *
 * Pattern: Two Pointers (after sorting)
 *
 * Examples:
 * findPair([1, 5, 3, 4, 2], 2)     // true (1,3 or 3,5)
 * findPair([8, 6, 2, 4, 1], 3)     // true (1,4)
 * findPair([1, 3, 5], 7)           // false
 *
 * Approach:
 * 1. Sort the array.
 * 2. Use two pointers (left & right).
 * 3. Compare difference between values.
 * 4. Move pointers based on comparison.
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(1) (ignoring sorting space)
 */

function findPair(arr, num) {
  if (!Array.isArray(arr)) {
    throw new TypeError("First argument must be an array");
  }

  const target = Math.abs(num);

  // Sort array in ascending order
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = 1;

  while (right < arr.length) {
    if (left === right) {
      right++;
      continue;
    }

    const diff = arr[right] - arr[left];

    if (diff === target) {
      return true;
    } else if (diff < target) {
      right++;
    } else {
      left++;
    }
  }

  return false;
}

module.exports = findPair;