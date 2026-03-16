/**
 * Problem: Find Longest Substring Without Repeating Characters
 * ------------------------------------------------------------
 * Given a string, return the length of the longest substring
 * with all unique characters.
 *
 * Pattern: Sliding Window (Variable Size)
 *
 * Examples:
 * findLongestSubstring("rithmschool")   // 7
 * findLongestSubstring("thisisawesome") // 6
 * findLongestSubstring("bbbbbb")        // 1
 * findLongestSubstring("")              // 0
 *
 * Approach:
 * 1. Use two pointers (left and right).
 * 2. Use a Map to store last seen index of characters.
 * 3. If duplicate found within current window,
 *    move left pointer forward.
 * 4. Track maximum window length.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function findLongestSubstring(str) {
    if (typeof str !== "string") {
        throw new TypeError("Input must be a string");
    }

    let maxLength = 0;
    let left = 0;
    const seen = new Map();

    for (let right = 0; right < str.length; right++) {
        const char = str[right];

        if (seen.has(char) && seen.get(char) >= left) {
            left = seen.get(char) + 1;
        }

        seen.set(char, right);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

module.exports = findLongestSubstring;