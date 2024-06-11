var isNStraightHand = function(hand, groupSize) {
    if (hand.length % groupSize !== 0) {
        return false
    }

    const loops = hand.length / groupSize
    const obj = {}
    //sort hand into Object?
    for (let i = 0; i < hand.length; i++) {
        if (!obj[hand[i]]) {
            obj[hand[i]] = 1
        }
        else {
            obj[hand[i]] = obj[hand[i]] + 1
        }
    }

    for (let i = 0; i < loops; i++) {
        const keys = Object.keys(obj).filter(key => obj[key] > 0)
        const min = Math.min(...keys)
        //remove min from obj
        obj[min] = obj[min] - 1
        let current = min
        let next = min + 1
        //decrement the count for that key
        //create the groups
        for (let j = 1; j < groupSize; j++) {
            //obj[current + 1]
            console.log(obj[next])
            if (!obj[next]|| obj[next] <= 0) {
                console.log(next + ": " + obj[next] + " is out of numbers")
                return false
            }
            else {
                //decrement the count
                obj[next] = obj[next] - 1
                // if (obj[next] === 0) {
                //     delete obj[next]
                // }
                next = next + 1
            }
        }
    }
    return true
};

console.log(isNStraightHand([8,10,12], 3))