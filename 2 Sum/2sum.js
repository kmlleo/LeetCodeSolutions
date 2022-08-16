/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
var twoSum = function(nums, target) {
    let targetHash = new Map();
    for(let i=0; i<nums.length; i++){
        if (targetHash.has(target - nums[i])){
            return [ targetHash.get(target - nums[i]), i ]
        }
        targetHash.set(nums[k], k)
    }
};
