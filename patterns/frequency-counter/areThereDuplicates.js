/**
 * Problem: Are There Duplicates
 * ---------------------------------------
 * Implement a function that accepts a variable number
 * of arguments and checks whether there are any duplicates.
 *
 * Pattern: Frequency Counter (Using Set)
 *
 * Examples:
 * areThereDuplicates(1, 2, 3)              // false
 * areThereDuplicates(1, 2, 2)              // true
 * areThereDuplicates('a', 'b', 'c', 'a')   // true
 *
 * Approach:
 * - Use a Set to store unique values.
 * - Iterate through arguments.
 * - If value already exists in Set → duplicate found.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function areThereDuplicates(...args) {
    // If less than 2 arguments, duplicates are impossible
    if (args.length < 2) return false;

    // Create a Set to track seen values
    const seen = new Set();

    for (const value of args) {
        // If value already exists, duplicate found
        if (seen.has(value)) return true;

        seen.add(value);
    }

    return false;
}


module.exports = areThereDuplicates;