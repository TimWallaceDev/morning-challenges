import timer from "./timer.mjs"

function convertToTitleCase(sentence) {
    //split on spaces, not every letter
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        let first = words[i].slice(0, 1)
        let last = words[i].slice(1, words[i].length)
        words[i] = first.toUpperCase() + last.toLowerCase()
    }
    return words.join(' ');
}

function convertToTitleCase2(sentence) {
    //split on spaces, not every letter
    let letters = sentence.split('');
    let final = []
    for (let i = 0; i < letters.length; i++) {
        //if there was a space, convert to upper
        if (letters[i - 1] == " ") {
            final.push(letters[i].toUpperCase())
        }
        //otherwise to lowercase
        else {
            final.push(letters[i].toLowerCase())
        }
    }
    return final.join('');
}

function convertToTitleCase3(sentence) {
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split('');
        words[i][0] = words[i][0].toUpperCase();
        words[i] = words[i].join('')
    }
    return words.join(' ');
}

function longFunction(){
    let i = 0;
    //count up to almost 10 million
    while (i < 9999999){
        i++
        let date = new Date()
    }
    return i
}


let time2 = await timer(convertToTitleCase2, "THE QUICK BROWN FOX JUMPS OVER THE LAZY MOUSE")
let time3 = await timer(convertToTitleCase3, "THE QUICK BROWN FOX JUMPS OVER THE LAZY MOUSE")
let time = await timer(convertToTitleCase, "THE QUICK BROWN FOX JUMPS OVER THE LAZY MOUSE")
// let time4 = await timer(longFunction)