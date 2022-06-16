/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const cache = {};
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    const complement = target - currNum;
    const complementIndex = cache[complement];
    if (complementIndex !== undefined) return [complementIndex, i];
    else cache[currNum] = i;
  }
};
