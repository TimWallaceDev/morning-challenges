function sumAllItems(array){
    if (array.length === 0){
        //do not return empty array
        return 0
    }

    //sum needs to start at 0
    let sum = 0 

    // i++, not x++
    for (let i=0; i < array.length; i++){
        //array items, not sum items
        sum += array[i]
    }
    //need to return sum, not console log
    return sum
}

console.log(sumAllItems([3,3,3,3]))