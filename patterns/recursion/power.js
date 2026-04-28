/**
 * Problem: Power
 * ---------------------------------------
 * Write a function that accepts a base and an exponent.
 * The function should return base raised to the power of exponent.
 *
 * The function should handle:
 * - Positive exponents
 * - Zero exponent
 * - Negative exponents
 *
 * Pattern: Recursion
 *
 * Examples:
 * power(2, 3)   // 8
 * power(5, 0)   // 1
 * power(2, -2)  // 0.25
 *
 * Approach:
 * 1. Base case: if exponent is 0 → return 1.
 * 2. If exponent is negative → compute reciprocal.
 * 3. Otherwise → multiply base by recursive call with exponent - 1.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n) (due to recursive call stack)
 */

function power(base, exponent) {
    // Input validation
    if (typeof base !== "number" || typeof exponent !== "number") {
        throw new TypeError("Both base and exponent must be numbers");
    }

    // Base case
    if (exponent === 0) return 1;

    // Handle negative exponent
    if (exponent < 0) {
        return 1 / power(base, -exponent);
    }

    // Recursive case
    return base * power(base, exponent - 1);
}

module.exports = power;