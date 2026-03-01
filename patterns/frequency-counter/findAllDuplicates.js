/**
 * Problem: Find All Duplicates
 * ---------------------------------------
 * Write a function that accepts an array and
 * returns all duplicate values.
 *
 * Each duplicate should appear only once in the result.
 *
 * Pattern: Frequency Counter (Using Map)
 *
 * Examples:
 * findAllDuplicates([1, 2, 3])                // []
 * findAllDuplicates([1, 2, 2, 3, 3, 4])       // [2, 3]
 * findAllDuplicates(["a", "b", "a", "c"])     // ["a"]
 *
 * Approach:
 * 1. Use a Map to count occurrences of each value.
 * 2. When count reaches 2, push into duplicates array.
 * 3. Return the duplicates array.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function findAllDuplicates(arr) {
    // Input validation
    if (!Array.isArray(arr)) {
        throw new TypeError("Input must be an array");
    }

    // Edge case
    if (arr.length === 0) return [];

    const countMap = new Map();
    const duplicates = [];

    for (const value of arr) {
        const count = (countMap.get(value) || 0) + 1;
        countMap.set(value, count);

        // Add to result only when count becomes 2
        if (count === 2) {
            duplicates.push(value);
        }
    }

    return duplicates;
}

module.exports = findAllDuplicates;