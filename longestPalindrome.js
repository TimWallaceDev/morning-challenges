/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let palindromes = []

    //loop over each letter
    //i is the current index of string
    for (let i = 0; i < s.length; i++) {
        currentPalindrome = [s[i]]
        //check if neighbors of current letter match
        let next = 1
        while (s[i - next] == s[i + next] && s[i - next] != undefined && s[i + next] != undefined) {
            //if yes, add to current palindrome
            currentPalindrome.unshift(s[i - next])
            currentPalindrome.push(s[i + next])
            next++
        }
        //save current palindrome
        palindromes.push(currentPalindrome.join(""))
        //check if neighbors have one similar that could team up as the middle
        let left = 1
        let right = 1
        //reset palindrome
        currentPalindrome = [s[i]]
        //assign left and right to their appropriate values
        //check to the left
        if (s[i - left] === s[i]) {
            currentPalindrome.unshift(s[i - left])
            left++
        }
        //check to the right
        else if (s[i + right] === s[i]) {
            currentPalindrome.push(s[i + right])
            right++
        }
        else {
            //no chance of getting a longer palindrome at this index. push current to palindromes and call it a day
            palindromes.push(currentPalindrome.join(""))
            continue
        }
        //push current double middle
        palindromes.push(currentPalindrome.join(""))
        //keep going as long as neighbors beside the new middle are equal
        // console.log(i - left, i + right)

        while (s[i - left] === s[i + right] && s[i - left] != undefined && s[i + right] != undefined) {
            //if yes, add to current palindrome
            // console.log("found matching neighbors")
            // console.log(s[i - left], s[i + right])
            currentPalindrome.unshift(s[i - left])
            currentPalindrome.push(s[i + right])
            left++
            right++
        }
        palindromes.push(currentPalindrome.join(""))
    }
    palindromes.sort((a, b) => b.length - a.length)
    console.log(palindromes[0])
    return palindromes[0]
};

longestPalindrome("babad")
longestPalindrome("cbbc")
longestPalindrome("a")
longestPalindrome("aaaa")
longestPalindrome("asantaatnasa")
longestPalindrome("racecar")


