/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let palindromes = []
    //loop over each letter
    for (let current = 0; current < s.length; current++) {
        //check for palindromes with single letter as middle
        currentPalindrome = [s[current]]
        //check next letter over are palindrome
        let nextIndex = 1
        while (s[current - nextIndex] == s[current + nextIndex]) {
            //if yes, add to current palindrome
            currentPalindrome.unshift(s[current - nextIndex])
            currentPalindrome.push(s[current + nextIndex])
            nextIndex++
        }
        //when palindrome is complete, push it to palindromes
        palindromes.push(currentPalindrome.join(""))


        //check for palindromes with two matching letters as middle
        let left = 1
        let right = 1
        if (currentPalindrome.length === 1) {
            console.log("only one letter in array, checking for double middle")
        }

    }
    console.log(palindromes)
};

longestPalindrome("cbbd")