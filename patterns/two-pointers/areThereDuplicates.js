/**
 * Problem: Are There Duplicates
 * ---------------------------------------
 * Implement a function that accepts a variable number
 * of arguments and checks whether there are any duplicates.
 *
 * This version uses the Two Pointers pattern.
 *
 * Pattern: Two Pointers (after sorting)
 *
 * Examples:
 * areThereDuplicates(1, 2, 3)              // false
 * areThereDuplicates(1, 2, 2)              // true
 * areThereDuplicates('a', 'b', 'c', 'a')   // true
 *
 * Approach:
 * 1. Sort the values.
 * 2. Use two pointers to compare adjacent elements.
 * 3. If two adjacent values are equal → duplicate found.
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(1) (ignoring sorting space)
 */

function areThereDuplicates(...values) {
    if (values.length < 2) return false;

    // Sort values
    values.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });

    let left = 0;
    let right = 1;

    while (right < values.length) {
        if (values[left] === values[right]) {
            return true;
        }
        left++;
        right++;
    }

    return false;
}

module.exports = areThereDuplicates;