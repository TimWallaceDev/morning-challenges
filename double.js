let word = "hello world"

function double(string){
    return string
    .split("")
    .map(letter => letter + letter)
    .join("")
}

function doubleBonus(string){
    return string
    .split("")
    .map((letter, i, arr) => arr[i+1] === letter || arr[i-1] === letter? letter : letter + letter)
    .join("")
}

console.log(doubleBonus(word))
console.log(double(word))