/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums, index) {
    length = nums.length
    count = 0;
    temp = []
    for (i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            count = count + 1;
        } else {
            temp.push(nums[i])
        }
    }
    for (i = 0; i < temp.length; i++) {
        nums[i] = temp[i]
    }
    for (i = 0; i < count; i++) {
        nums[length - 1 - i] = 0
    }
    console.log(nums)
}

moveZeroes([0, 0, 1])
