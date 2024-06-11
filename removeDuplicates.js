var removeDuplicates = function(nums) {
    unique = 0
    let length = nums.length

  for (let i = 0; i < length; i++){
      if (nums[unique] !== nums[unique-1]){
          unique++
      }
      else {
          nums.splice(unique, 1)
      }
  }  
  return nums
};


console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
