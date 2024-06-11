var isIsomorphic = function (s, t) {
    //create a empty map to store corresponding letters
    const map = {}
    const map2 = {}

    //go over each letter of s
    for (let i = 0; i < s.length; i++) {
        const currentLetterS = s[i]
        const currentLetterT = t[i]
        //if letter is not a value, add it to the map with its corresponding value
        if (!map[currentLetterS] && !map2[currentLetterT]) {
            map[currentLetterS] = currentLetterT
            map2[currentLetterT] = currentLetterS
        }
        else {
            //if the value of t does not match the key's value, return false
            if (map[currentLetterS] !== currentLetterT || map2[currentLetterT] !== currentLetterS) {
                return false
            }
        }
    }
    //return true
    return true

};

var isIsomorphicAntoni = function (s, t) {
    if (s.length !== t.length) {
      return false;
    }
  
    sCounter = {};
    tCounter = {};
    for (const char of s) {
      sCounter[char] = sCounter[char]? (sCounter[char]) + 1: 1;
    }
    for (const char of t) {
      tCounter[char] = tCounter[char]? (tCounter[char]) + 1: 1;
    }

    console.log(sCounter, tCounter)
    console.log(Object.values(sCounter), Object.values(tCounter))
  
    if (Object.values(sCounter) === Object.values(tCounter)) {
        
      return true;
    } else {
      return false;
    }
  };

console.log(isIsomorphicAntoni("paper", "title"))
console.log(isIsomorphicAntoni("foo", "bar"))