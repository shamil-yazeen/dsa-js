/**
 * Problem: Is Subsequence
 * ---------------------------------------
 * Write a function that takes two strings.
 * The function should check whether the characters
 * in the first string form a subsequence of the second string.
 *
 * A subsequence means the characters appear in the same order,
 * but not necessarily consecutively.
 *
 * Pattern: Two Pointers
 *
 * Examples:
 * isSubsequence("abc", "abracadabra")   // true
 * isSubsequence("abc", "acb")           // false
 * isSubsequence("", "hello")            // true
 *
 * Approach:
 * 1. Use two pointers.
 * 2. Move pointer i only when characters match.
 * 3. Always move pointer j.
 * 4. If i reaches end of str1 → subsequence found.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function isSubsequence(str1, str2) {
    // Input validation
    if (typeof str1 !== "string" || typeof str2 !== "string") {
        throw new TypeError("Both inputs must be strings");
    }

    // Early exit optimization
    if (str1.length > str2.length) return false;

    let i = 0;
    let j = 0;

    while (i < str1.length && j < str2.length) {
        if (str1[i] === str2[j]) {
            i++;
        }
        j++;
    }

    return i === str1.length;
}

module.exports = isSubsequence;