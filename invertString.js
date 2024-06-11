

function invertString(sentence){

    const words = sentence.split(" ")
    let finalSentence = ""

    //O of N because of for loop

    for (word of words){

    //find the middle
    const isOdd = word.length % 2 === 1
    const middle = word.length / 2

    //split the array
    //reverse each new array
    const array = word.split('')
    const firstHalf =  array.splice(0, middle).reverse()
    const secondHalf = array.splice(isOdd? 1: 0).reverse()

    //combine each pice of the new word back together
    const invertedArr = [...firstHalf, ...array, ...secondHalf]
    const final = invertedArr.join("")

    //add the inverted word to the final sentence
    finalSentence += final + " "
    }

    return finalSentence
}

console.log(invertString("the quick brown fox jumps over the lazy mouse"))

