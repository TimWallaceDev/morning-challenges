function switchLetter(string) {
    return string
    .split("")
    .map(letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase())
    .join("")
}

console.log(switchLetter("wHATS UP DOOOOOD!"))