function loopArray(arr, direction, steps){

    let removed = arr.splice(direction === "left"? 0 : arr.length - (steps), steps)
    return direction === 'left'? arr.concat(removed) : removed.concat(arr)
}


console.log(loopArray([1, 5, 87, 45, 8, 8], 'left', 3))
console.log(loopArray([1, 5, 87, 45, 8, 8], 'right', 0))