//start with 0 1 1

let nums = [0,1,1]
//100 billion
while (nums[nums.length - 1] < 100000000000){
    num1 = nums[nums.length -1]
    num2 = nums[nums.length -2]
    let newnum = num1 + num2
    nums.push(newnum)
}

console.log(nums)