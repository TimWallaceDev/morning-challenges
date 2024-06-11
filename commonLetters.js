/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    //create an array of letters from the first word. 
    //go though each letter and make sure it is in each word. If it's not, remove it from the array

    let common = [...words[0]]

    //loop through every word
    for (let i = 1; i < words.length; i++) {
        let current = words[i].split("")
        const loops = common.length

        //loop through common letters
        for (let j = 0; j < loops; j++) {
            let commonChar = common[j]
            //check that each common letter is in the word
            if (!current.includes(commonChar)) {
                console.log(commonChar)
                //delete that letter from the common
                console.log("not updated:" + common )
                common.splice(j, 1)
                console.log("updated:" +  common )
            }
            //delete the found letter from the current
            const index = current.indexOf(commonChar)
            if (index > -1){
                current.splice(index, 1)
            }
        }
    }
    console.log(common)
    return common
};


commonChars(["cool","lock","cook"])