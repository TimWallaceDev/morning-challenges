/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    //set pointerL to first letter
    let pointerL = 0
    //set pointerR to first letter
    let pointerR = 0
    //create an array of current substring
    let longestSubstring = []
    let currentSubstring = []
    for (let i = 0; i < s.length; i++) {
        //keep moving pointerR to the right while the next letter isnt in current substring
        if (!currentSubstring.includes(s[pointerR])) {
            currentSubstring.push(s[pointerR])
            pointerR++
        }
        //if it is in current substring, move the left pointer one step to the right and remove the letter from the substring
        else {
            //find the index of previous occurance of pointerR and set pointerL one past that
            while (s[pointerL] != s[pointerR]){
                pointerL++
                currentSubstring.shift()
            }
            pointerL++
            //if pointerL and pointerR are the same index, add that letter to the substring
            if (pointerL == pointerR){
                currentSubstring.push(s[pointerL])
            }
            else {
                currentSubstring.push(s[pointerR])
            }
            pointerR++
            
            currentSubstring.shift()
        }
        //after each move, if the substring is greater than the previous one, make that the new biggest
        if (currentSubstring.length > longestSubstring.length) {
            longestSubstring = currentSubstring.map(item => item)
        }
    }
    const final = longestSubstring.join("")
    console.log(final, final.length)
    return final.length

};
lengthOfLongestSubstring("dvdf")
lengthOfLongestSubstring("aab")
lengthOfLongestSubstring("abcabcbb")
lengthOfLongestSubstring("pwwkew")