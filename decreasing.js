/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let count = 0;
  for (let index = 1; index < nums.length - 1; index++) {
    if (count > 1) {
      return false;
    }
    if (nums[index] > nums[index + 1]) {
      if (nums[index - 1] <= nums[index + 1]) {
        count++;
      } else {
        return false;
      }
    }
  }
  return count > 1 ? false : true;
};

console.log(checkPossibility([5, 7, 1, 8]))
