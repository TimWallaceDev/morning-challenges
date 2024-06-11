

function findMissingInt(arr){
    const nums = [0,1,2,3,4,5,6,7,8,9]

    for (let num of nums){
        if (!arr.includes(num)){
            return num
        }
    }
}


console.log(findMissingInt([0,1,2,3,4,5,6,7,9]))