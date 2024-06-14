// function sortColors(nums: number[]): void {
//     //go through all number
//     for (let i: number = 0; i < nums.length; i++) {
//         const currentNum: number = nums[i]
//         if (currentNum === 0) {
//             //if its a 0, slice it, and unshift it
//             nums.splice(i, 1)
//             nums.unshift(0)
//         }
//         if (currentNum === 2) {
//             //if its a 3, slice it, and push it
//             nums.splice(i, 1)
//             nums.push(2)
//         }
//     }
//     console.log(nums)
//     // return nums
// };

function sortColors(nums: number[]): void {
    let count = [0, 0, 0]
    
    //count each color
    for (let num of nums){
        count[num]++;
    };
    const zero: number = count[0]
    const one: number = count[0] + count[1]

    //go through and change elements to that color
    for (let i: number = 0; i < nums.length; i++){
        if(i < count[0]){
            nums[i] = 0
        }
        else if (i >= zero && i < one){
            nums[i] = 1
        }
        else if(i >= one){
            nums[i] = 2
        }
    }
    console.log(nums)
};

sortColors([2,0,2,1,1,0])
sortColors([2,0,2,0,1])