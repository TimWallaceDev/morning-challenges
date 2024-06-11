// ================== scoreSentence ======================

// Question:
// Given a string of words (sentence), you need to find the highest scoring word. Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc. You need to return the highest scoring word as a string. If two words score the same, return the word that appears earliest in the original string. All letters will be lowercase and all inputs will be valid.

// =======================================================


function scoreSentence(string) {
    //split the scentence into words
    const strings = string.split(" ")

    //keep track of highest score and associated word
    let maxScore = 0
    let maxWord;
    //loop over each word
    for (let word of strings) {
        //reset score of each word
        score = 0
        //loop over each letter of word and talley its score
        for (let letter of word) {
            score += letter.charCodeAt(0)
        }
        //if score is higher than previous score, keep word in memory
        if (score > maxScore) {
            maxScore = score
            maxWord = word
        }
    }
    return maxWord
}


console.log(scoreSentence("abcd bdca"))