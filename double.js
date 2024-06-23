let word = "hello world"

export function double(string){
    return string
    .split("")
    .map(letter => letter + letter)
    .join("")
}

export function doubleBonus(string){
    return string
    .split("")
    .map((letter, i, arr) => arr[i+1] === letter || arr[i-1] === letter? letter : letter + letter)
    .join("")
}

console.log(doubleBonus(word))
console.log(double(word))