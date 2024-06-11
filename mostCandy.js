let test1 = [1,4,2,3,4,5,12]
let extra1 = 8

function mostCandies(kids, extraCandy){
    //find the most candy
    let most = 0
    kids.forEach(candy => candy > most? most = candy: undefined);
    //see which kids will have the most if given extra candy
    return kids.map(candy => (candy + extraCandy) > most)
}

function mostCandies2(kids, extraCandy){
    //find the most candy
    let most = Math.max(...kids)
    //see which kids will have the most if given extra candy
    return kids.map(candy => (candy + extraCandy) > most)
}

console.log(mostCandies2(test1, extra1))