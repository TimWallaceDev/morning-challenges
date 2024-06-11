function addOne(arr) {
    arr[arr.length - 1] = "0"
    console.log(arr)
    //go through each char to carry any ones
    let carry = true
    for (let i = arr.length - 2; i >= 0; i--) {
        let current = arr[i]
        if (current === "1") {
            arr[i] = "0"
        }
        else {
            arr[i] = "1"
            carry = false
            break
        }
    }
    if (carry) {
        arr.unshift("1")
    }


    return arr
}

function divide(arr){

    let carry = 1

    //remove first number
    arr.pop()
    //go through the array
    // for (let i = 0; i < arr.length; i++){
        
    //     //if its a 1, turn it to 0 and carry. 
    //     if (arr[i] === "1"){
    //         if (carry === 1){
    //             arr[i] = "1"
    //             carry = 1
    //         }
    //         else {
    //             arr[i] = "0"
    //             carry = 1
    //         }
            
    //     }
    //     else {
    //         if (carry === 1){
    //             arr[i] = "1"
    //             carry = 0
    //         }
    //     }
    //     //if its a 0, add a 1
    // }
    return arr
}


console.log(divide([ '1', '1', '0', '1', '0' ]))