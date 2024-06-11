function moveZeros(arr) {
    for (let i = 0; i < arr.length; i++){
        let item = arr[i]
        if (item === 0){
            arr.slice(i, 1)
            arr.push(0)
        }
    }
    return arr
}

moveZeros([1,2,3,40,0,1,5,0,1,6,7,0,1,7,1])