let a = [1,3,4,"a"]
let b = [,4,5,6]

function isNumber(array){
    for (number of array){
        if (typeof number !== "number"){
            return false
        }
    }
    return true
}


function isNumberOneLine(array){
    return array.every(el => typeof el === "number")
}

console.log(isNumber(a))
console.log(isNumber(b))

console.log(isNumberOneLine(a))
console.log(isNumberOneLine(b))