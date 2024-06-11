function intruder(arr) {
    //loop over each element
    for (item of arr) {
        for (char of item) {
            //check each char in element

            if (char === "🤖") {
                return true
            }
        }
    }
    return false
}

function intruderOneLine(arr) {
    return !arr.every(element => !element.includes('🤖'))
}

function chris(box){
    return !!box.find((element) => element.includes('🤖'));
}

let box = ['#####', '#🤖 #', '#  #', '# #', '#####'];

console.log(chris(box))