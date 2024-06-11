function moveZeros(arr) {
    return arr.sort((a, b) => a === 0 ? 1 : b === 0 ? -1 : 0)
}

function moveZeros1(arr) {
    let count = 0
    while (arr.indexOf(0) > -1) {
        arr.splice(arr.indexOf(0), 1)
        count++
    }
    for (let i = 0; i< count ; i++){
        arr.push(0)
    }
    return arr
}

console.log(moveZeros([0,0,0,0,1, 3, 4, 0, 5, 6, 2, 0, 7]))

