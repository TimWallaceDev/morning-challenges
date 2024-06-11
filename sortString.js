

function sortString(string){

    const sorted = []

    const arr = string.split(" ")

    for (word of arr){
        let index
        for (letter of word){
            index = parseInt(letter)
            console.log(index)
            if (Number.isInteger(parseInt(letter))){
                sorted[index - 1] = word
                break;
            }
            console.log(letter)
        }
    }
    return sorted.join(" ")
}

console.log(sortString("4of Fo1r pe6ople g3ood th5e the2"))