function minPatches(nums: number[], n: number): number {
    let count: number = 0
    const range: number[] = []

    for (let i: number = 1; i < n; i++) {
        if (nums.includes(i)) {
            range[i] = i
        }
    }

    console.log(range)

    for (let current: number = 1; current < n; current++) {
        if (!range[current]) {

            let nextLowest: number = -1

            //find the next lowest that we have
            for (let j: number = current; j > 0; j--) {
                if (range[j]) {
                    nextLowest = range[j]
                    break
                }
            }

            //if there isnt a next lowest, add it to the nums
            if (nextLowest < 0) {
                range[current] = current
                count++
                break
            }

            //find the pair the next lowest
            const remainder = current - nextLowest

            //if we dont have the pair, add current num to nums
            if (!range[remainder]) {
                range[current] = current
                console.log(current)
                count++
            }
            else {
                range[current] = current
            }
        }
    }

    return count

};

console.log(minPatches([1,3], 6))
console.log(minPatches([1,5,10], 20))