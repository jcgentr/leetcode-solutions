/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let [l, r] = [0, nums.length - 1];

  while (l <= r) {
    const medianIndex = Math.floor((r + l) / 2);
    const median = nums[medianIndex];
    if (target === median) {
      return medianIndex;
    } else if (target < median) {
      r = medianIndex - 1;
    } else {
      l = medianIndex + 1;
    }
  }
  return -1;
};
