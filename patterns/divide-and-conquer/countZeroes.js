
/**
 * Counts number of trailing zeroes in a sorted binary array.
 * Assumes array is sorted: all 1s first, then 0s.
 * Time: O(log n)
 * Space: O(1)
 */
function countZeroes(arr) {
    // Ensure input is an array
    if (!Array.isArray(arr)) {
        throw new TypeError("Input must be an array");
    }

    // Initialize binary search pointers
    let left = 0;
    let right = arr.length - 1;
    let firstZeroIndex = -1;

    // Binary search to find first zero
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === 0) {
            firstZeroIndex = mid;   // store potential first zero
            right = mid - 1;        // search left side
        } else {
            left = mid + 1;         // search right side
        }
    }

    // Return count of zeroes
    return firstZeroIndex === -1 ? 0 : arr.length - firstZeroIndex;
}