let removeDuplicates = (array) => {
    //array needs to be an array, not an object 
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        //check if value of array[i] is in new array, not i itself. indexOf returns index if found, -1 if not. does not return false
        if (newArray.indexOf(array[i]) === -1) {
            //push array value at index i, not i itself
            newArray.push(array[i])
        }
    }
    //return new array, not original array
    return newArray;
}

console.log(removeDuplicates([1, 4, 4, 4, 4, 4, 11, 15, 1, 2, 3, 4, 4, 4, 6, 11]))
