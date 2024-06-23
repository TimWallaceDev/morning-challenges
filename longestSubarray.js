export var longestSubarray = function (nums, limit) {

    let start = 0
    let end = 0
    let max = 0
    let current = 0

    while (end < nums.length + 1) {

        const numberOfEl = end - start
        console.log("starting at index: " + start + " number of elements: " + numberOfEl)

        const currentSubarray = nums.slice(start, end)
        //get the largest number in the subarray
        const largest = Math.max(...currentSubarray)
        //get the smallest number in the subarray
        const smallest = Math.min(...currentSubarray)
        //calculate the difference
        const difference = largest - smallest

        //if diff is smaller than limit, add current length to current, expand the array
        console.log(currentSubarray + " max: " + largest + ", min: " + smallest + " difference : " + difference)
        console.log("end: " + end + " length: " + nums.length)
        if (difference <= limit) {
            current = currentSubarray.length
            end++
            if (current > max) {
                max = current
            }
        }
        //if diff is larger than limit, shrink it
        else {
            start++
            current--
        }

    }

    return max
};

// console.log(longestSubarray([10,1,2,4,7,2], 5))
console.log(longestSubarray([9,10,1,7,9,3,9,9], 7))
//expected 5