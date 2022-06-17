/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];
  let currSum = nums[0];
  let largestSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currSum += nums[i];
    // start new subarray if needed
    if (nums[i] > currSum) currSum = nums[i];
    if (currSum > largestSum) largestSum = currSum;
  }
  return largestSum;
};
