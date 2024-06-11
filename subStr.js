/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    //array of prices for each letter
    const cost = []

    //compare every ith letter in s and t, and add cost to array
    for (let i = 0; i < s.length; i++){
        const costS = s.charCodeAt(i)
        const costT = t.charCodeAt(i)
        const currentCost = Math.abs(costS - costT)
        cost.push(currentCost)
    }
    console.log(cost)

    //shift the values and subtract from maxcost until out of money keeping track of count

    let maxAmount = 0
    let currentAmount = 0
    let pointerA = 0
    let pointerB = -1
    let currentCost = 0

    while (pointerB < cost.length - 1){
        const nextCost = cost[pointerB + 1]
        if (nextCost + currentCost <= maxCost){
            //move the pointer
            pointerB++
            //add current cost
            currentCost += nextCost
            //add current amount
            currentAmount++
        }else {
            const currentRefund = cost[pointerA]
            //subtract current cost
            currentCost -= currentRefund
            //subract current amount
            currentAmount--
            //move the pointer
            pointerA++
        }

        if (currentAmount > maxAmount){
            maxAmount = currentAmount
        }
    }

    return maxAmount
};

equalSubstring("abcd", "bcdf", 3)