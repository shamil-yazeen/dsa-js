/**
 * Problem: Construct Note
 * ---------------------------------------
 * Write a function that accepts two strings:
 * - message (target string)
 * - source (available characters)
 *
 * The function should return true if the message
 * can be constructed using characters from source.
 *
 * Each character in source can only be used once.
 *
 * Pattern: Frequency Counter (Using Map)
 *
 * Examples:
 * constructNote("hello", "hleol")        // true
 * constructNote("hello", "helo")         // false
 * constructNote("aabb", "abcab")         // true
 *
 * Approach:
 * 1. Count the frequency of characters in source.
 * 2. Iterate through message.
 * 3. If a character is unavailable or exhausted → return false.
 *
 * Time Complexity: O(n + m)
 * Space Complexity: O(n)
 */

function constructNote(message, source) {
    // Input validation
    if (typeof message !== "string" || typeof source !== "string") {
        throw new TypeError("Both inputs must be strings");
    }

    // Quick length check optimization
    if (source.length < message.length) return false;

    const charCount = new Map();

    // Count characters from source
    for (const char of source) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Validate message characters
    for (const char of message) {
        const count = charCount.get(char);

        if (!count) return false;

        charCount.set(char, count - 1);
    }

    return true;
}

module.exports = constructNote;