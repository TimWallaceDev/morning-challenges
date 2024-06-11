

function score(string){

    const map = {
        "love": 0,
        "15": 1,
        "30": 2,
        "40": 3
    }

    return string
    .split("-")
    .reduce((acc, curr) =>  curr == "all"? map[acc] + map[acc] : map[acc] + map[`${curr}`])
}

console.log(score("15-love"))
console.log(score("30-love"))
console.log(score("40-love"))

console.log(score("15-all"))
console.log(score("30-all"))
console.log(score("40-all"))

console.log(score("30-40"))


