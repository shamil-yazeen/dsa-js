/**
 * Problem: Same Frequency
 * ---------------------------------------
 * Write a function that accepts two positive integers.
 * The function should return true if both numbers
 * contain the same frequency of digits.
 *
 * Pattern: Frequency Counter
 *
 * Examples:
 * sameFrequency(182, 281)       // true
 * sameFrequency(34, 14)         // false
 * sameFrequency(3589578, 5879385) // true
 * sameFrequency(22, 222)        // false
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function sameFrequency(num1, num2) {
    // Input validation
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        throw new TypeError("Inputs must be numbers");
    }

    // Convert numbers to strings to iterate over digits
    const str1 = String(num1);
    const str2 = String(num2);

    // If lengths differ, frequencies cannot match
    if (str1.length !== str2.length) return false;

    // Create frequency counter object
    const frequency = {};

    // Count digits in first number
    for (let digit of str1) {
        frequency[digit] = (frequency[digit] || 0) + 1;
    }

    // Compare digits with second number
    for (let digit of str2) {
        // If digit not found or count exhausted
        if (!frequency[digit]) {
            return false;
        }
        frequency[digit]--;
    }

    return true;
}

// Export for testing (optional if using Node.js)
module.exports = sameFrequency;