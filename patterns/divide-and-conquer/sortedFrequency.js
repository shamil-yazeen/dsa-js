    // sortedFrequency([1,1,2,2,2,2,3],2) // 4 
    // sortedFrequency([1,1,2,2,2,2,3],3) // 1 
    // sortedFrequency([1,1,2,2,2,2,3],1) // 2 
    // sortedFrequency([1,1,2,2,2,2,3],4) // -1


    // ([1,1,2,2,2,2,3],2)

    // write a function which accepts an array and a target variable

    // make a variable first = 0
    // make a variable last = arr.length -1
    // make a varibale middle = Math.floor (fast + last ) /2

    // write a while loop with condition first<=last 
    // find the first start of the target number and return the index

    // write a second loop and do the same

  function sortedFrequency(arr, target) {
    let first = 0;
    let last = arr.length - 1;
    let firstTargetIndex = -1;
    let secondTargetIndex = -1;

    // Find first occurrence
    while (first <= last) {
        let middle = Math.floor((first + last) / 2);

        if (arr[middle] === target) {
            firstTargetIndex = middle;
            last = middle - 1;
        } 
        else if (arr[middle] < target) {
            first = middle + 1;
        } 
        else {
            last = middle - 1;
        }
    }

    if (firstTargetIndex === -1) return -1;

    first = 0;
    last = arr.length - 1;

    // Find last occurrence
    while (first <= last) {
        let middle = Math.floor((first + last) / 2);

        if (arr[middle] === target) {
            secondTargetIndex = middle;
            first = middle + 1;
        } 
        else if (arr[middle] < target) {
            first = middle + 1;
        } 
        else {
            last = middle - 1;
        }
    }

    return secondTargetIndex - firstTargetIndex + 1;
}

    sortedFrequency([1,1,2,2,2,2,3],2)