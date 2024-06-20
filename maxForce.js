var maxDistance = function (position, m) {

    //sort the position array

    const sorted = position.sort((a, b) => a - b)

    //setup the search space
    let start = 0
    let end = sorted[sorted.length - 1]
    let middle = Math.ceil(((end - start) / 2) + start)

    while (end > start) {
        // console.log("search space is from " + start + " to " + end)
        // console.log("currently checking : " + middle)
        // //check the current middle as the max
        const isPossible = checkIfMaximumIsPossible(sorted, middle, m)

        if (isPossible) {
            start = middle
            middle = Math.floor(((end - start) / 2) + start + 1) 
        }
        else {
            end = middle - 1
            middle = Math.floor(((end - start) / 2) + start)
        }
    }

    return start
};


console.log(maxDistance([1,2,3,4,7], 3))
//3
console.log(maxDistance([5,4,3,2,1,1000000000], 2))
//9999999
console.log(maxDistance([79,74,57,22], 4))
//5


function checkIfMaximumIsPossible(arr, max, balls) {
    //keep track of balls
    //drop a ball right at the beginning
    balls = balls - 1
    let lastIndex = arr[0]
    //go through every element in the position array. 
    for (let i = 1; i < arr.length; i++) {
        //calculate the current distance
        let distance = arr[i] - lastIndex
        if (distance >= max) {
            lastIndex = arr[i]
            balls--
            if (balls <= 0) {
                return true
            }
        }
    }

    return false
}